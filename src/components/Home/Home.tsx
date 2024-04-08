// import React, { useEffect, lazy, Suspense } from 'react'
// import './styles.css'
// import { FaInstagram, FaTiktok } from 'react-icons/fa6'
// import { AiOutlineYoutube } from 'react-icons/ai'
// import { TbBrandSpotify } from 'react-icons/tb'
// import './styles.css'
// import front from '../../assets/front.png'
// import back from '../../assets/back.png'
// import frontHeartEyes from "../../assets/pictures/HeartEyesOfficialCoverArt.jpeg"
// import frontHeartBack from "../../assets/pictures/HeartEyesOfficialBackCoverArt.jpeg"

// function Home() {
// 	const isabellaInfo = {
// 		name: 'Ella Rossi',
// 		latest:
// 			'https://open.spotify.com/track/5Jy3tQAgMdDz7z9Hj25Ha6?si=bcaadfb456d14e66',
// 		instagram: 'https://www.instagram.com/ellarossimusic/',
// 		youtube: 'https://www.youtube.com/@EllaRossi',
// 		spotify:
// 			'https://open.spotify.com/artist/5XeDL6Pow4Ag5j9HWv9KHm?si=FJ0XHLupQu-nCVfFfwni9w',
// 		tiktok: 'https://www.tiktok.com/@ellarossimusic',
// 	}

// 	const goToLink = (linkType: string) => {
// 		switch (linkType) {
// 			case 'youtube':
// 				return (window.location.href = `${isabellaInfo.youtube}`)
// 			case 'instagram':
// 				return (window.location.href = `${isabellaInfo.instagram}`)
// 			case 'spotify':
// 				return (window.location.href = `${isabellaInfo.spotify}`)
// 			case 'latest':
// 				return (window.location.href = `${isabellaInfo.latest}`)
// 			case 'tiktok':
// 				return (window.location.href = `${isabellaInfo.tiktok}`)
// 			default:
// 				break
// 		}
// 	}

// 	return (
// 		<div className='home-container'>

// 			<div className='flip-card'>
// 				<div className='flip-card-inner'>
// 					<div className='flip-card-front'>
// 					    <img className='front' src={front} style={{ height:"100%" , width:"100%"}} />
// 					</div>
// 					<div className='flip-card-back' style={{ height:"100%" , width:"100%", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}} >
// 						Welcome
// 					</div>
// 				</div>
// 			</div>

// 			<h1 className='header-title'>ELLA ROSSI</h1>

// 			<div className='latest-cover-art-container'>
// 				<div className='latest-text'>
// 					"Heart Eyes" available in all streaming platforms{' '}
// 				</div>
// 				<div className='latest-cover-art-wrapper'>
// 					<img
// 						className='latest-cover-art'
// 						src={frontHeartEyes}
// 						onClick={() => goToLink('latest')}
// 					/>
// 				</div>
// 			</div>

//           <div className='latest-cover-art-container'>

// 		  <div className='latest-text'>
// 					"Heart Eyes" available in all streaming platforms{' '}
// 		</div>

// 		  <div className='flip-card-art'>
// 				<div className='flip-card-inner'>
// 					<div className='flip-card-front'>
// 					    <img className='front' src={frontHeartEyes} style={{ height:"100%" , width:"100%"}} />
// 					</div>
// 					<div className='flip-card-back' style={{ height:"100%" , width:"100%", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}} >
// 					    <img className='front' src={frontHeartBack} style={{ height:"100%" , width:"100%"}} />
// 					</div>
// 				</div>
// 			</div>

// 			</div>

// 			<div className='artistSocialsContainer'>
// 				<button className='artistSocials' onClick={() => goToLink('instagram')}>
// 					<FaInstagram />
// 				</button>
// 				<button className='artistSocials' onClick={() => goToLink('youtube')}>
// 					<AiOutlineYoutube />
// 				</button>
// 				<button className='artistSocials' onClick={() => goToLink('spotify')}>
// 					<TbBrandSpotify />
// 				</button>
// 				<button className='artistSocials' onClick={() => goToLink('tiktok')}>
// 					<FaTiktok />
// 				</button>
// 			</div>
// 		</div>
// 	)
// }

// export default Home

import React, { useState } from 'react'
import './styles.css'
import linenVideo from '../../assets/videos/linen.mp4'
import { FaInstagram, FaTiktok } from 'react-icons/fa6'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandSpotify } from 'react-icons/tb'
import front from '../../assets/front.png'
import frontHeartEyes from '../../assets/pictures/HeartEyesOfficialCoverArt.jpeg'
import frontHeartBack from '../../assets/pictures/HeartEyesOfficialBackCoverArt.jpeg'

function Home() {
	type CardName = 'card1' | 'card2'

	type IsabellaInfoKey =
		| 'latest'
		| 'instagram'
		| 'youtube'
		| 'spotify'
		| 'tiktok'

	const [isFlipped, setIsFlipped] = useState<{ [key in CardName]: boolean }>({
		card1: false,
		card2: false,
	})

	const toggleFlip = (card: CardName) => {
		setIsFlipped((prevState) => ({ ...prevState, [card]: !prevState[card] }))
	}

	const isabellaInfo = {
		name: 'Ella Rossi',
		latest:
			'https://open.spotify.com/album/5AGn0717PFbRlkChcRYZOl?si=rk91UEplRlmRGbJD_gNW1Q',
		instagram: 'https://www.instagram.com/ellarossimusic/',
		youtube: 'https://www.youtube.com/@EllaRossi',
		spotify:
			'https://open.spotify.com/artist/5XeDL6Pow4Ag5j9HWv9KHm?si=FJ0XHLupQu-nCVfFfwni9w',
		tiktok: 'https://www.tiktok.com/@ellarossimusic',
	}

	const goToLink = (linkType: IsabellaInfoKey) => {
		const url = isabellaInfo[linkType]
		if (url) window.location.href = url
	}

	return (
		<div className='home-container'>


			<div
				className={`flip-card ${isFlipped.card1 ? 'flipped' : ''}`}
				onClick={() => toggleFlip('card1')}
				style={{ marginTop:"24px"}}
				>
				<div className='flip-card-inner'>
					<div className='flip-card-front'>
						<img src={front} style={{ height: '100%', width: '100%' }} />
					</div>
					<div className='flip-card-back'>Welcome</div>
				</div>
			</div>

			<h1 className='header-title'>ELLA ROSSI</h1>

			<div
				className={`flip-card-art ${isFlipped.card2 ? 'flipped' : ''}`}
				onClick={() => toggleFlip('card2')}>
				<div className='flip-card-inner'>
					<div className='flip-card-front'>
						<img
							src={frontHeartEyes}
							style={{ height: '100%', width: '100%' }}
						/>
					</div>
					<div className='flip-card-back'>
						<img
							src={frontHeartBack}
							style={{ height: '100%', width: '100%' }}
						/>
					</div>
				</div>
			</div>


				  <div className='latest-text'>
					"Heart Eyes" available in all streaming platforms{' '}
	</div>

			<div className='artistSocialsContainer'>
				<button className='artistSocials' onClick={() => goToLink('instagram')}>
					<FaInstagram />
				</button>
				<button className='artistSocials' onClick={() => goToLink('youtube')}>
					<AiOutlineYoutube />
				</button>
				<button className='artistSocials' onClick={() => goToLink('spotify')}>
					<TbBrandSpotify />
				</button>
				<button className='artistSocials' onClick={() => goToLink('tiktok')}>
					<FaTiktok />
				</button>
			</div>
		</div>
	)
}

export default Home
