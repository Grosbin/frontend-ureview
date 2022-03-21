

export const variantsButton = {
	hover: {
		scale: 0.9,
	},
	tap: {
		scale: 0.8,
	}
}


export const variantsCard = {
	visible: {
		scale: 1,
		opacity: 1,
		transition: { type: 'spring', bounce: 0.1, duration: 1, delay: 0.2 },

	},
	hidden: {
		opacity: 0,
		scale: 0,
	},

}

export const variantsNavbar = {
	visible: { y: 0, opacity: 1, transition: { delay: 0.2 } },
	hidden: { y: -10, opacity: 0 },
}
