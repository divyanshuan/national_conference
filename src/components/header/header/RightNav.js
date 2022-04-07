import React from 'react';
import {
    NavLink,
    NavMenu,
} from './NavbarElements';


const RightNav = ({ open }) => {
  return (
    <NavMenu open={open}>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink  to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/services' activeStyle>
			Services
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Sign-Up
		</NavLink>
		<NavLink to='/login' activeStyle>
			Login
		</NavLink>
        <NavLink to='/privacy' activeStyle>
			Privacy
		</NavLink>
	</NavMenu>
  )
}

export default RightNav