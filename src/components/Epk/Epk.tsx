import React, { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandSpotify } from 'react-icons/tb'
import { BsFacebook } from 'react-icons/bs'
import epkPic from '../../assets/pictures/epkPic.jpg'
import ellaArtistCover from '../../assets/pictures/ellaArtistCover.jpg'
import './styles.css'

const Epk = () => {
	const works = [
		// {
		// 	title: 'Fairytale',
		// 	type: 'spotify',
		// 	year: '2020',
		// 	link: 'https://open.spotify.com/track/1SMggtx9BCKMmRt46z42FU?si=debf3e9dd9af47c9',
		// 	albumWork: require('../../assets/pictures/fairytale.png'),
		// },
		{
			title: 'Linen',
			year: '2023',
			link: 'https://open.spotify.com/track/24EpMJ93iYXIWLiCjfXtWx?si=6cf6dd57bbb342d4',
			type: 'spotify',
			release: 'Single',
			albumWork: require('../../assets/pictures/linen.jpeg'),
		},
		{
			title: "Can't You Tell",
			type: 'spotify',
			year: '2023',
			release: 'Single',
			link: 'https://open.spotify.com/track/5vQMG5R1AKVHlQvpeUdG4l?si=6f17d94f9ae24cfb',
			albumWork: require('../../assets/pictures/cantyoutell.jpeg'),
		},
		{
			title: "Scared To Love",
			type: 'spotify',
			year: '2023',
			release: 'Single',
			link: 'https://open.spotify.com/track/41LJWtSAOjSXe2ishYcgTh?si=1d3ca200ca00438c',
			albumWork: require('../../assets/pictures/ScaredToLoveHQ.jpeg'),
		},
		{
			title: "Heart Eyes",
			type: 'spotify',
			year: '2023',
			release: 'EP',
			link: 'https://open.spotify.com/track/41LJWtSAOjSXe2ishYcgTh?si=1d3ca200ca00438c',
			albumWork: require('../../assets/pictures/HeartEyesOfficialCoverArt.jpeg'),
		},
	]

	const metrics = [
		{
			social: 'Instagram',
			followers: '12,000 +',
			icon: <FaInstagram />,
			type: 'Followers',
			link: 'https://www.instagram.com/ellarossimusic/',
		},
		{
			social: 'Spotify',
			followers: '100,000 +',
			icon: <TbBrandSpotify />,
			type: 'Streams',
			link: 'https://open.spotify.com/artist/5XeDL6Pow4Ag5j9HWv9KHm?si=FJ0XHLupQu-nCVfFfwni9w',
		},
		{
			social: 'TikTok',
			followers: '10,000 +',
			icon: <FaTiktok />,
			type: 'Views',
			link: 'https://www.tiktok.com/@ellarossimusic',
		},
		{
			social: 'YouTube',
			followers: '1,000 +',
			icon: <AiOutlineYoutube />,
			type: 'Subscribers',
			link: 'https://www.youtube.com/@EllaRossi',
		},
		{
			social: 'FaceBook',
			followers: '8,000 +',
			icon: <BsFacebook />,
			type: 'Followers',
			link: 'https://www.facebook.com/ellarossimusic/',
		},
	]

	const goToLink = (linkType: string) => {

		const link = metrics.find(
			(metric) => metric.social.toLowerCase() === linkType.toLowerCase()
		)?.link

		switch (linkType.toLowerCase()) {
			case 'youtube':
				return (window.location.href = `${link}`)
			case 'instagram':
				return (window.location.href = `${link}`)
			case 'spotify':
				return (window.location.href = `${link}`)
			case 'tiktok':
				return (window.location.href = `${link}`)
			case 'facebook':
				return (window.location.href = `${link}`)
			default:
				break
		}
	}

	return (
		<div className='epk-container'>

			<img className='video' src={epkPic} />

			<div className='epk-inner'>

			<div className='epk-sign'> EPK </div>

				<div className='top-info'>

					<div className='cover-art'>
						<img src={ellaArtistCover} />
					</div>

					<div className='artist-info'>
						<div> @ellarossimusic </div>
						<div> 2 songs | 2 releases </div>
						<div className='roles'>
							<div>Song-writer</div>
							<div>·</div>
							<div>Vocalist</div>
						</div>
					</div>

				</div>

				<div className='bio'>
					<div className='bio-text'>
						Ella Rossi, the new and upcoming artist from San Diego, CA is making
						a splash in the RnB world with her unique and smooth sound,
						capturing the nostalgia of past romances with color and spotenuity
						of Pop. Ella just released her debut single's "Linen" & "Can't You
						Tell" and set to release her debut EP "Heart Eyes" in August 2023.
					</div>
				</div>

				<div className='works'>
					{
					
					works.map((work) => {
						return (
							<div key={work.title} className='works-tile'>
								<img src={work.albumWork} />
								<div className='works-info'>
									<div>{work.title}</div>
									<div> {work.release} · {work.year} </div>
								</div>
								<div
									className='metric-icon-play'
									onClick={() => goToLink(work.type)}>
									<AiFillPlayCircle />
								</div>
							</div>
						)
					})}
				</div>

				<div className='metrics'>
					{metrics.map((metric) => {
						return (
							<div key={metric.social} className='metric-block'>
								<div className='metric-info'>
									<div
										className='metric-icon'
										onClick={() => goToLink(metric.social)}>
										{metric.icon}
									</div>
									<div> {metric.followers} </div>
									<div>{metric.type}</div>
								</div>
							</div>
						)
					})}
				</div>


			</div>

			
		</div>
	)
}

export default Epk
