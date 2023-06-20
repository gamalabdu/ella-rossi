import React, { useState } from 'react'
import './styles.css'
import { Link, Outlet, Route, Router } from 'react-router-dom'
import About from '../About/About'

const Nav = () => {

	const [showNav, setShowNav] = useState<boolean>(false)


	return (
		
			<div className= 'content'>
			<nav role='navigation'>
				<div className= 'menuToggle'>
					<input type='checkbox' />
					<span></span>
					<span></span>
					<span></span>
					<ul className = 'menu' >
						<li >
						<Link to='/' preventScrollReset={true} reloadDocument > Home </Link>
						</li>
						<li>
						   <Link to='/about' preventScrollReset={true} reloadDocument > About </Link>
						</li>
						<li>
						   <Link to='/contact' preventScrollReset={true} reloadDocument > Contact </Link>
						</li>
						<li>
						   <Link to='/gallery' preventScrollReset={true} reloadDocument > Galleria </Link>
						</li>
					</ul>
				</div>
			</nav>		
		</div>
	)
}

export default Nav
