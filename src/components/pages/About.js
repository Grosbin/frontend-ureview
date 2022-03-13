import React from 'react'
import { assets } from '../../helpers/assets'
import { motion } from "framer-motion"

export const About = () => {

	const variantsImg = {
		visible: { opacity: 1, scale: 1, transition: { type: 'spring', delay: 0.2 } },
		hidden: { opacity: 0, scale: 0 },

	}

	const variantsCard = {
		hover: {
			scale: 1.2,
			transition: { duration: 0.3 },
		},
		tap: {
			scale: 0.9
		}
	}
	const variantsTilte1 = {
		visible: {
			opacity: 1, transition: { delay: 0.2 }
		},
		hidden: {
			opacity: 0,
		}
	}
	const variantsTilte2 = {
		visible: {
			opacity: 1, transition: { duration: 1, delay: 1.3 }
		},
		hidden: {
			opacity: 0,
		}
	}
	const variantsTilte3 = {
		visible: {
			opacity: 1, transition: { duration: 1, delay: 3 }
		},
		hidden: {
			opacity: 0,
		}
	}

	return (
		<div className='main'>

			<div className="surface-0 text-center cursor-pointer">
				<div className="mb-3 font-bold text-2xl">
					<motion.span
						initial="hidden"
						animate="visible"
						variants={variantsTilte1}
						className="text-yellow-400">UNAH </motion.span>
					<motion.span
						initial="hidden"
						animate="visible"
						variants={variantsTilte1}
						className="text-blue-400">Review</motion.span><br />
					<motion.span
						initial="hidden"
						animate="visible"
						variants={variantsTilte2}
						className="text-900">Un Producto, </motion.span>
					<motion.span
						initial="hidden"
						animate="visible"
						variants={variantsTilte3}
						className="text-900">Muchas Soluciones</motion.span>
				</div>
				<div className="text-700 text-sm mb-6">Este software fue creado para el beneficio de toda la comunidad universitaria.</div>
				<div className="grid">

					<div
						className="col-12 md:col-4 mb-4 px-5"

					>
						<motion.span
							whileHover="hover"
							whileTap="tap"
							variants={variantsCard}
							className="p-3 shadow-2 mb-3 inline-block"
							style={{ borderRadius: '10px' }}
						>
							{/* <i className="pi pi-desktop text-4xl text-blue-500"></i> */}
							<motion.img
								initial="hidden"
								animate="visible"
								variants={variantsImg}
								className='profile__about'
								src={assets(`./gabriel.png`)}
								alt="Ureview-Gabriel"
							/>
						</motion.span>
						<div className="text-blue-800 mb-3 font-medium">Desarrollador Front-end</div>
						<span className="text-700 text-sm line-height-2">Mi nombre es Gabriel Cruz estudiante de ingeniería en sistemas de la universidad nacional autónoma de Honduras, tengo amplios conocimientos de programación, base de datos, soy comprometido con lo que hago y perfeccionista.</span>
					</div>


					<div className="col-12 md:col-4 mb-4 px-5">
						<motion.span
							whileHover="hover"
							whileTap="tap"
							variants={variantsCard}
							className="p-3 shadow-2 mb-3 inline-block"
							style={{ borderRadius: '10px' }}
						>
							{/* <i className="pi pi-lock text-4xl text-blue-500"></i> */}
							<motion.img
								initial="hidden"
								animate="visible"
								variants={variantsImg}
								className='profile__about'
								src={assets(`./grosbin.png`)}
								alt=""
							/>
						</motion.span>
						<div className="text-blue-800 mb-3 font-medium">Desarrollador Full Stack</div>
						<span className="text-700 text-sm line-height-2">Hola, me llamo Grosbin Rivera, me considero una persona proactiva siempre me ha gustado buscar formas diferentes de aprender algo. Las áreas en que me desempeño son Desarrollo Back-end y Front-end, Servidores y Bases de datos. Cuento con la capacidad de tomar decisiones para obtener los resultados esperados.</span>
					</div>


					<div className="col-12 md:col-4 mb-4 px-5">
						<motion.span
							whileHover="hover"
							whileTap="tap"
							variants={variantsCard}
							className="p-3 shadow-2 mb-3 inline-block"
							style={{ borderRadius: '10px' }}

						>
							{/* <i className="pi pi-check-circle text-4xl text-blue-500"></i> */}
							<motion.img
								initial="hidden"
								animate="visible"
								variants={variantsImg}
								className='profile__about'
								src={assets(`./juan.png`)}
								alt=""
							/>
						</motion.span>
						<div className="text-blue-800 mb-3 font-medium">Desarrollador Back-end</div>
						<span className="text-700 text-sm line-height-2">Mi nombre es Juan Martínez soy estudiante de Ingeniería en sistemas con orientación a bases de datos e intelligence business, entre mis intereses y experiencias profesionales esta la tecnología blockchain y su aplicación en smart contract y criptomonedas, mi hobbi preferido son los deportes en general y pretendo hacerlo congeniar con mi carrera con algunas ideas a futuro de proyectos innovadores.</span>
					</div>

					<div className="col-12 md:col-4 mb-4 px-5">
						<motion.span
							whileHover="hover"
							whileTap="tap"
							variants={variantsCard}
							className="p-3 shadow-2 mb-3 inline-block"
							style={{ borderRadius: '10px' }}
						>
							{/* <i className="pi pi-globe text-4xl text-blue-500"></i> */}
							<motion.img
								initial="hidden"
								animate="visible"
								variants={variantsImg}
								className='profile__about'
								src={assets(`./matt.png`)}
								alt="" /
							>
						</motion.span>
						<div className="text-blue-800 mb-3 font-medium">Análista de Sistema</div>
						<span className="text-700 text-sm line-height-2">Hola, soy Matt Saravia, estudiante de Ingenieria en sistemas con muchas ganas de aprender y salir adelante, como pasatiempos  me gusta escuchar musica, jugar videojuegos y leer.</span>
					</div>

					<div className="col-12 md:col-4 mb-4 px-5">
						<motion.span
							whileHover="hover"
							whileTap="tap"
							variants={variantsCard}
							className="p-3 shadow-2 mb-3 inline-block"
							style={{ borderRadius: '10px' }}
						>
							{/* <i className="pi pi-github text-4xl text-blue-500"></i> */}
							<motion.img
								initial="hidden"
								animate="visible"
								variants={variantsImg}
								className='profile__about'
								src={assets(`./joel.png`)}
								alt="" /
							>
						</motion.span>
						<div className="text-blue-800 mb-3 font-medium">Tester</div>
						<span className="text-700 text-sm line-height-2">Me llamo Joel Hernández, me gusta jugar fútbol y ver series, me gusta el rock. Me apasiona la seguridad cibernética y me gustaría sacar un máster en ciberseguridad.</span>
					</div>

					<div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
						<motion.span
							whileHover="hover"
							whileTap="tap"
							variants={variantsCard}
							className="p-3 shadow-2 mb-3 inline-block"
							style={{ borderRadius: '10px' }}
						>

							{/* <i className="pi pi-shield text-4xl text-blue-500"></i> */}
							<motion.img
								initial="hidden"
								animate="visible"
								variants={variantsImg}
								className='profile__about'
								src={assets(`./cyntia.png`)}
								alt=""
							/>
						</motion.span>
						<div className="text-blue-800 mb-3 font-medium">Análista y Diseñadora</div>
						<span className="text-700 text-sm line-height-2">Mi nombre es Cyntia Reyes, una de mis metas es graduarme de mi carrera profesional Ingeniería en Sistemas, me gusta tomar cursos sobre mi carrera en el área de redes y desarrollo de software, mis pasatiempos favoritos es cocinar e ir a pasear con mis seres queridos a lugares nuevos.</span>
					</div>

				</div>
			</div>

		</div>
	)
}
