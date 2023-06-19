import React, { useEffect } from 'react'
import './styles.css'
import linenVideo from '../../assets/videos/linen.mp4'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandSpotify } from 'react-icons/tb'
import { FaTiktok } from 'react-icons/fa'
import './styles.css'
import { useWindowResize } from '../../util/useWindowResize'

function Home() {

	const isabellaInfo = {
		name: 'Ella Rossi',
		instagram: 'https://www.instagram.com/ellarossimusic/',
		youtube: 'https://www.youtube.com/@EllaRossi',
		spotify: 'https://open.spotify.com/artist/5XeDL6Pow4Ag5j9HWv9KHm?si=FJ0XHLupQu-nCVfFfwni9w',
		tiktok: 'https://www.tiktok.com/@ellarossimusic',
	}

	// makes the page start at the top of the page
	// useEffect(() => {
	//   window.scrollTo(0, 0)
	// }, [])

	const goToLink = (linkType: string) => {
		switch (linkType) {
			case 'youtube':
				return (window.location.href = `${isabellaInfo.youtube}`)
			case 'instagram':
				return (window.location.href = `${isabellaInfo.instagram}`)
			case 'spotify':
				return (window.location.href = `${isabellaInfo.spotify}`)
			case 'tiktok':
					return (window.location.href = `${isabellaInfo.tiktok}`)
			default:
				break
		}
	}

	// const heightOutput = document.querySelector("#height");

	// window.onresize = function() {
	// 	document.body.height = window.innerHeight;
	// }

	// window.onresize();

	const resize = useWindowResize

	resize()


	return (
		<div className='home-container'>
			<video src={linenVideo} autoPlay loop muted playsInline={true} disablePictureInPicture={true} />
			<h1>ELLA ROSSI</h1>
			{/* <p> "Linen" Out Now </p> */}

			<div
				className='artistSocialsContainer'>
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
