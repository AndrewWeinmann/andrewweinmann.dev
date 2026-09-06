export interface Photo {
	src: string;
	alt: string;
	caption?: string;
}

export const photos: Photo[] = [
	{
		src: "/photos/Dog Happy.jpg",
		alt: "Dog laying on the ground",
		caption: "Always happy to be outside",
	},
	{
		src: "/photos/Dog in Bush.jpg",
		alt: "Dog sitting in a bush",
		caption: "He's liked bushes from the day he came home",
	},
	{
		src: "/photos/Dog in Grass.jpg",
		alt: "Dog laying in the grass",
		caption: "Taking a break in the grass on a hot day",
	},
	{ src: "/photos/Dog in Yard.jpg", alt: "Dog laying in a yard", caption: "Enjoying the yard" },
	{
		src: "/photos/Dog on Bush.jpg",
		alt: "Dog laying on a bush",
		caption: "Bushes are his favorite",
	},
	{
		src: "/photos/Dog on Couch.jpg",
		alt: "Dog laying on a couch",
		caption: "He sleeps in the weirdest positions",
	},
	{ src: "/photos/Dog Sleeping.jpg", alt: "Dog sleeping", caption: "Resting after a long day" },
	{ src: "/photos/Dog Up Close.jpg", alt: "Dog up close", caption: "Curious about the camera" },
	{ src: "/photos/Dog on Side.jpg", alt: "Dog laying on its side", caption: "Why, hello there!" },
	{ src: "/photos/Dog Upside Down.jpg", alt: "Dog upside down", caption: "Always playful" },
	{
		src: "/photos/Dog on Walk.jpg",
		alt: "Dog walking on a leash outside",
		caption: "Always on the hunt for new smells",
	},
];
