import { useCallback, useEffect, useRef, useState } from "react";
import { type Photo, photos } from "../data/photos.ts";

interface LightboxNavButtonProps {
	direction: "prev" | "next";
	onClick: () => void;
}

function LightboxNavButton({ direction, onClick }: LightboxNavButtonProps) {
	const isPrev = direction === "prev";
	return (
		<button
			type="button"
			className={`absolute ${isPrev ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 text-2xl text-heading hover:text-accent transition-colors p-4`}
			onClick={onClick}
			aria-label={isPrev ? "Previous photo" : "Next photo"}
		>
			{isPrev ? "←" : "→"}
		</button>
	);
}

interface LightboxProps {
	photos: Photo[];
	index: number;
	onClose: () => void;
	onPrev: () => void;
	onNext: () => void;
}

function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
	const photo = photos[index];
	const dialogRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const previouslyFocused = document.activeElement as HTMLElement | null;
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();
		return () => {
			document.body.style.overflow = "";
			previouslyFocused?.focus();
		};
	}, []);

	useEffect(() => {
		const focusable = Array.from(
			dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled])") ?? [],
		);
		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
				return;
			}
			if (e.key === "ArrowLeft") {
				onPrev();
				return;
			}
			if (e.key === "ArrowRight") {
				onNext();
				return;
			}
			if (e.key === "Tab") {
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [onClose, onPrev, onNext]);

	return (
		<div
			ref={dialogRef}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
			role="dialog"
			aria-modal="true"
			aria-label="Photo lightbox"
		>
			<LightboxNavButton direction="prev" onClick={onPrev} />

			<div className="max-w-4xl max-h-[90vh] mx-16 flex flex-col items-center gap-3">
				<img src={photo.src} alt={photo.alt} className="max-w-full max-h-[80vh] object-contain" />
				{photo.caption && <p className="text-sm text-muted text-center">{photo.caption}</p>}
			</div>

			<LightboxNavButton direction="next" onClick={onNext} />

			<button
				ref={closeButtonRef}
				type="button"
				className="absolute top-4 right-4 text-muted hover:text-heading transition-colors p-2 text-lg"
				onClick={onClose}
				aria-label="Close lightbox"
			>
				✕
			</button>
		</div>
	);
}

export default function Photos() {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const handleClose = useCallback(() => setSelectedIndex(null), []);

	const handlePrev = useCallback(() => {
		setSelectedIndex((i) => ((i ?? 0) - 1 + photos.length) % photos.length);
	}, []);

	const handleNext = useCallback(() => {
		setSelectedIndex((i) => ((i ?? 0) + 1) % photos.length);
	}, []);

	return (
		<div className="space-y-12">
			<h1 className="text-4xl font-bold tracking-tight">Photos</h1>

			{photos.length === 0 ? (
				<p className="text-muted">No photos yet. Check back soon.</p>
			) : (
				<div style={{ columns: "3 200px", columnGap: "0.75rem" }} className="w-full">
					{photos.map((photo, i) => (
						<button
							key={photo.src}
							type="button"
							className="break-inside-avoid mb-3 cursor-pointer group overflow-hidden rounded-sm text-left w-full block"
							onClick={() => setSelectedIndex(i)}
						>
							<img
								src={photo.src}
								alt={photo.alt}
								className="w-full block transition-opacity group-hover:opacity-80"
								loading="lazy"
							/>
							{photo.caption && <p className="text-xs text-muted mt-1">{photo.caption}</p>}
						</button>
					))}
				</div>
			)}

			{selectedIndex !== null && (
				<Lightbox
					photos={photos}
					index={selectedIndex}
					onClose={handleClose}
					onPrev={handlePrev}
					onNext={handleNext}
				/>
			)}
		</div>
	);
}
