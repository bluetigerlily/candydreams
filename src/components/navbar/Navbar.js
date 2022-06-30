import React from 'react';
import { Link } from "react-scroll";
import './Navbar.scss';

const Navbar = () => {

    return (
        <div className='NavbarContainer'>
                <Link to='Home'
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Home</Link>
                    <Link to='Products'
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Products</Link>
                    <Link to='Information'
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Information</Link>
        </div>
    );
}
export default Navbar;