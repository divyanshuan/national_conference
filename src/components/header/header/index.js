import React from 'react';
import Burger from './hamburger';
import {
Nav,
Logo
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
        <Logo/>
		<Burger/>
	</Nav>
	</>
);
};

export default Navbar;
