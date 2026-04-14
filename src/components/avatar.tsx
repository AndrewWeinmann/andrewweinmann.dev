interface AvatarProps {
	src?: string;
	alt?: string;
	size?: "sm" | "md" | "lg";
}

const sizes = {
	sm: "w-12 h-12 text-sm",
	md: "w-20 h-20 text-lg",
	lg: "w-28 h-28 text-2xl",
};

export default function Avatar({ src, alt = "Andrew Weinmann", size = "lg" }: AvatarProps) {
	if (src) {
		return (
			<img
				src={src}
				alt={alt}
				className={`${sizes[size]} rounded-full object-cover border-2 border-border`}
			/>
		);
	}

	return (
		<div
			className={`${sizes[size]} rounded-full bg-surface border-2 border-border flex items-center justify-center font-mono font-medium text-accent`}
			aria-label={alt}
			role="img"
		>
			AW
		</div>
	);
}
