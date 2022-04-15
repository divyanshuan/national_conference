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
		<NavLink  to='/orginisingcommittee' activeStyle>
			Organising Committee
		</NavLink>
		<NavLink to='/keynote-speakers' activeStyle>
			Keynote Speakers
		</NavLink>
		<NavLink to='/callforpapers' activeStyle>
			Call for Papers
		</NavLink>
		<NavLink to='/local-arrangements' activeStyle>
			Local Arrangements
		</NavLink>
		{/* <NavLink to='/login' activeStyle>
			Login
		</NavLink>
        <NavLink to='/privacy' activeStyle>
			Privacy
		</NavLink> */}
	</NavMenu>
  )
}

export default RightNav