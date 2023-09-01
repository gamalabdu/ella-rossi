import './styles.css'
import { Link } from 'react-router-dom'

const Nav = () => {


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
