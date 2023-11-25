import React, { useEffect } from 'react'
import './styles.css'
import linenVideo from '../../assets/videos/linen.mp4'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandSpotify } from 'react-icons/tb'
import { FaTiktok } from 'react-icons/fa'
import './styles.css'
import christmas from '../../assets/pictures/christmastime.png'
import front from '../../assets/front.png'
import back from '../../assets/back.png'

function Home() {

	const isabellaInfo = {
		name: 'Ella Rossi',
		latest:"https://open.spotify.com/track/5Jy3tQAgMdDz7z9Hj25Ha6?si=bcaadfb456d14e66",
		instagram: 'https://www.instagram.com/ellarossimusic/',
		youtube: 'https://www.youtube.com/@EllaRossi',
		spotify: 'https://open.spotify.com/artist/5XeDL6Pow4Ag5j9HWv9KHm?si=FJ0XHLupQu-nCVfFfwni9w',
		tiktok: 'https://www.tiktok.com/@ellarossimusic',
	}



	const goToLink = (linkType: string) => {
		switch (linkType) {
			case 'youtube':
				return (window.location.href = `${isabellaInfo.youtube}`)
			case 'instagram':
				return (window.location.href = `${isabellaInfo.instagram}`)
			case 'spotify':
				return (window.location.href = `${isabellaInfo.spotify}`)
			case 'latest':
				return (window.location.href = `${isabellaInfo.latest}`)
			case 'tiktok':
					return (window.location.href = `${isabellaInfo.tiktok}`)
			default:
				break
		}
	}



	return (
		<div className='home-container'>
			{/* <video src={linenVideo} autoPlay loop muted playsInline={true} disablePictureInPicture={true} /> */}

			{/* <div className='flip-card'>
				<div className='flip-card-inner'>
					<div className='flip-card-front'>
					    <img className='front' src={front} style={{ height:"100%" , width:"100%"}} />
					</div>
					<div className='flip-card-back' style={{ height:"100%" , width:"100%", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}} >
						Welcome 
					</div>
				</div>
			</div> */}

           <h1 className='header-title'>ELLA ROSSI</h1>




			<div className='latest-cover-art-container'>
				<div className='latest-text'>
					"Christmas Time Is Here" available in all streaming platforms{' '}
				</div>
				<div className='latest-cover-art-wrapper'>
					<img
						className='latest-cover-art'
						src={christmas}
						onClick={() => goToLink('latest')}
					/>
				</div>
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
