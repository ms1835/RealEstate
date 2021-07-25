import React from 'react'
import {
    Nav,NavLink,Bars,NavMenu,
    // NavBtn,NavBtnLink 
} from './NavbarElements'


const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars />
            <NavMenu>
            <NavLink to='/' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/property' activeStyle>
                    Property
                </NavLink>
                <NavLink to='/agent' activeStyle>
                    Agent
                </NavLink>
                <NavLink to='/manager' activeStyle>
                    Manager
                </NavLink>
                <NavLink to='/seller' activeStyle>
                    Seller
                </NavLink>
                <NavLink to='/buyer' activeStyle>
                    Buyer
                </NavLink>
            </NavMenu>
            {/* <NavBtn>
                <NavBtnLink>
                    Sign In
                </NavBtnLink>
            </NavBtn> */}
        </Nav>
        
        
        </>

    )
}

export default Navbar