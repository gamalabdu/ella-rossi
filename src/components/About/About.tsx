import React from 'react'
import cantYouTell from '../../assets/videos/Cant You Tell 3 Final CanvasNO.gif'
import heartHandDrawn from '../../assets/pictures/heartHandDrawn.png'
import './styles.css'

const About = () => {
	return (
		<div className='about-container'>

			<img className='video' src={cantYouTell} style={{ filter: "brightness(50%)", WebkitFilter: "brightness(50%)" }} />

			<div className='about-container-2'>

				<div className='about-title'>ABOUT</div>

              <div className='quotes-container'>
				<div className='quote'>
					"She has established herself as a rising star in the music industry" - Earmilk
				</div>
				<div className='quote'>
					"...One listen to the California native's voice, and you'll be hooked." - Sheesh Media
				</div>
				<div className='quote'>
					"... We can't help but praise her innate ability to craft stunning narratives." - CLOUT
				</div>
				<div className='quote'>
					"A captivating artist poised to leave an indelible mark on the music industry." - Celebmix
				</div>
			  </div>

				<div className='about-text'>
					<div className='inner-text'>
					<span className='ella'>Ella’s</span> singing career began at the ripe
					age of 9, and got a taste of stardom after she made her first
					international television appearance at the age of 9 years old. Growing
					up <span className='ella'>Ella</span> listened to The Great American
					Songbook including classic artists such as Frank Sinatra,{' '}
					<span className='ella'>Ella </span>
					Fitzgerald, and Billie Holiday. At the same time, she gravitated
					towards Pop listening to artists such as Ariana Grande, Sade, Jazmine
					Sullivan and Sabrina Claudio. This blend of velvet smooth Jazz and
					colorful infectious pop has culminated into{' '}
					<span className='ella'>Ella’s</span> unique sound. Throughout her two
					year hiatus, Ella is back with her new single Linen. Her debut EP,
					Heart Eyes, which is set to release later this year.
					</div>
				</div>

				<div className='heart'>
					<img src={heartHandDrawn} />
				</div>

			</div>
		</div>
	)
}

export default About
