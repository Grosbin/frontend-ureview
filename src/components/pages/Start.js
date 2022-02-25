import React from 'react'
import { Button } from 'primereact/button';
// import Lottie from 'lottie-web';
import LogoUreview from '../../assets/LogoUreview.svg'


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


	return (
		<div className='main'>

			<div className='logo__Ureview'>
				<img src={LogoUreview} alt="logoUreview" />
				<Button className='button__tutorial' label="Ver Tutorial" />
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
