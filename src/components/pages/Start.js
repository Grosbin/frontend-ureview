import React from 'react'
import { Button } from 'primereact/button';
// import Lottie from 'lottie-web';
// import LogoUreview from '../../assets/LogoUreview.svg'
import { motion } from "framer-motion"
import { assets } from '../../helpers/assets';

export const Start = () => {

	// const animation = useRef(null);
	// useEffect(() => {
	// 	Lottie.loadAnimation({
	// 		container: animation.current,
	// 		renderer: 'svg',
	// 		loop: true,
	// 		autoplay: true,
	// 		animationData: require('../../lottie/data.json')
	// 	});
	// }, []);

	const variantsImg = {
		visible: { y: 0, opacity: 1, transition: { delay: 0.2 } },
		hidden: { y: -100, opacity: 0 },
	}

	const variantsButton = {
		visible: {
			x: 30,
			transition: { duration: 0.3, },
		},
		hidden: {
			x: -100
		},
		hover: {
			scale: 0.9,
		},
		tap: {
			scale: 0.85
		}


	}

	return (
		<div className='main'>

			<div className='logo__Ureview'>
				<motion.img
					initial="hidden"
					animate="visible"
					variants={variantsImg}
					src={assets(`./LogoUreview.png`)}
					alt="logoUreview"
				/>

				<motion.div
					whileHover="hover"
					whileTap="tap"
					animate="visible"
					variants={variantsButton}

				//Desabilita la animacion
				// initial={false}

				>
					<Button

						className='button__tutorial p-button-black'
						label="Ver Tutorial"
					/>

				</motion.div>
			</div>

			<div className='item__course'>

			</div>

			<div className='item__voae'>

			</div>

			<div className='item__practice'>

			</div>

		</div>
	)
}
