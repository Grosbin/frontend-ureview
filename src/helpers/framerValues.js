
// Imagenes

export const variantsImgStart = {
	visible: { y: 0, opacity: 1, transition: { delay: 0.2 } },
	hidden: { y: -100, opacity: 0 },
};

export const variantsImgAbout = {
	visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
	hidden: { opacity: 0 },
};



// Textos
export const variantsTitle1 = {
	visible: {
		opacity: 1,
		transition: { delay: 0.2 },
	},
	hidden: {
		opacity: 0,
	},
};

export const variantsTitle2 = {
	visible: {
		opacity: 1,
		transition: { duration: 1, delay: 2.8 },
	},
	hidden: {
		opacity: 0,
	},
};
export const variantsTitle3 = {
	visible: {
		opacity: 1,
		transition: { duration: 1, delay: 4.1 },
	},
	hidden: {
		opacity: 0,
	},
};



// Botones
export const variantsButton = {
	hover: {
		scale: 1,
	},
	tap: {
		scale: 0.8,
	}
}

export const variantsButtonTutorial = {
	visible: {
		x: 20,
		opacity: 1,
		transition: { type: "spring", stiffeness: 100, delay: 0.1 }, //TODO: Antes tenia delay: 0.2
	},
	hidden: {
		opacity: 0,
		x: -100,
	},
	hover: {
		scale: 0.9,
	},
	tap: {
		scale: 0.85,
	},
};

// Tarjetas
export const variantsCard = {
	hover: {
		scale: 1,
		transition: { duration: 0.1 },
	},
	visible: {
		scale: 0.9,
		opacity: 1,
		transition: { type: 'spring', bounce: 0.1, duration: 0.5, delay: 0.2 },

	},
	hidden: {
		opacity: 0,
		scale: 0,
	},

}

export const variantsCardAbout = {
	hover: {
		scale: 1.25,
		transition: { duration: 0.2 },
	},
	tap: {
		scale: 0.9,
	},
};
//TODO:Actividad

export const variantsCardActivity = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0,
	},
}

// Barra de navegación
export const variantsNavbar = {
	visible: { y: 0, opacity: 1, transition: { delay: 0.2 } },
	hidden: { y: -10, opacity: 0 },
}




