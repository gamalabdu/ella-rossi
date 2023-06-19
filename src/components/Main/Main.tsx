import React from 'react'
import './styles.css'
import About from '../About/About'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

const Main = () => {
	return (
    <div className='main-container'>
    <Nav />
    <Outlet />
    </div>
  )
}

export default Main
