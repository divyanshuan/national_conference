import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../media/logo.png';

export const Nav = styled.nav`
background: #F5F5F5;
height: 23vh;
display: flex;
justify-content: space-between;
z-index: 12;
align-items: center;
position: fixed;
width: 100%;
`;

export const Logo = styled.img`
height: 220px;
width: 240px;
align-items: center;
margin-left: 80px;
@media screen and (max-width: 768px) {
	margin-left: 50px;
}
`;

Logo.defaultProps = {
	src: logo,
  };

export const NavLink = styled(Link)`
color: #000000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 18px;
&.active {
	color: #808080;
}
:hover{
	color: #808080;
}

`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #F5F5F5;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.5s ease-in-out;
}
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 50px;
  right: 70px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
