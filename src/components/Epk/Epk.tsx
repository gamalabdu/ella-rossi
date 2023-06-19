import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandSpotify } from 'react-icons/tb'
import epkPic from '../../assets/pictures/epkPic.jpg'
import ellaArtistCover from '../../assets/pictures/ellaArtistCover.jpg'
import './styles.css'

const Epk = () => {

	const works = [
		{
			title: 'Linen',
			year: '2023',
			link: 'https://open.spotify.com/track/24EpMJ93iYXIWLiCjfXtWx?si=6cf6dd57bbb342d4',
            type : 'spotify',
			albumWork: require('../../assets/pictures/linen.jpeg'),
		},
		{
			title: 'Fairytale',
            type : 'spotify',
			year: '2020',
			link: 'https://open.spotify.com/track/1SMggtx9BCKMmRt46z42FU?si=debf3e9dd9af47c9',
			albumWork: require('../../assets/pictures/fairytale.png'),
		},
	]

	const metrics = [
		{
			social: 'Instagram',
			followers: 12000,
			icon: <FaInstagram />,
            link: 'https://www.instagram.com/ellarossimusic/',
		},
		{
			social: 'Spotify',
			followers: 300,
			icon: <TbBrandSpotify />,
            link: 'https://open.spotify.com/artist/5XeDL6Pow4Ag5j9HWv9KHm?si=FJ0XHLupQu-nCVfFfwni9w',
		},
		{
			social: 'TikTok',
			followers: 300,
			icon: <FaTiktok />,
            link: 'https://www.tiktok.com/@ellarossimusic',
		},
		{
			social: 'YouTube',
			followers: 1100,
			icon: <AiOutlineYoutube />,
            link: 'https://www.youtube.com/@EllaRossi',
		},
	]


    const goToLink = (linkType: string) => {

        const link = metrics.find( metric => metric.social.toLowerCase() === linkType.toLowerCase() )?.link

        console.log(link)

		switch ( linkType.toLowerCase() ) {
			case 'youtube':
				return (window.location.href = `${link}`)
			case 'instagram':
				return (window.location.href = `${link}`)
			case 'spotify':
				return (window.location.href = `${link}`)
            case 'tiktok':
				return (window.location.href = `${link}`)
			default:
				break
		}
	}

	return (
		<div className='epk-container'>

			<img className='video' src={epkPic} />

       <div className='epk-inner'>

			<div className='top-info'>

				<div className='cover-art'>
					<img src={ellaArtistCover} />
				</div>

				<div className='artist-info'>
					<div> @ellarossimusic </div>
					<div> 2 songs | 2 releases </div>
					<div className='roles'>
						<div> Song-writer </div>
						<div> · </div>
						<div> Vocalist </div>
					</div>
				</div>
			</div>

            <div className='bio'>
                <div className='bio-text'>
					Ella Rossi, new and upcoming artist from San Deigo, CA is making a
					splash in the RnB world with her unique and smooth sound, capturing
					the nostolgia of past romances with color and spotenuity of Pop.
                </div>
			</div>

			<div className='works'>
				{works.map((work) => {
					return (
						<div key={work.title} className='works-tile'>
							<img src={work.albumWork} />
							<div className='works-info'>
								<div>{work.title}</div>
								<div> Single · {work.year} </div>
								<div style={{ fontSize:"10px"}}> Main Artist, Song-writer </div>
							</div>
							<div className='metric-icon' onClick={() => goToLink(work.type)}>
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
                            <div className='metric-icon' onClick={ () =>  goToLink(metric.social) }>{metric.icon}</div>
								<div> {metric.followers} </div>
								<div>Followers</div>
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
