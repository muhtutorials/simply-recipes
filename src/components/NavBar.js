import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../assets/images/logo.svg';

export default function NavBar() {
    const [show, setShow] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                    <button className="nav-btn" onClick={() => setShow(!show)}>
                        <FiAlignJustify />
                    </button>
                </div>
                <div className={show ? "nav-links show-links" : "nav-links"}>
                    <Link
                        to="/"
                        className="nav-link"
                        activeClassName="active-link"
                        onClick={() => setShow(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/recipes"
                        className="nav-link"
                        activeClassName="active-link"
                        onClick={() => setShow(false)}
                    >
                        Recipes
                    </Link>
                    <Link
                        to="/tags"
                        className="nav-link"
                        activeClassName="active-link"
                        onClick={() => setShow(false)}
                    >
                        Tags
                    </Link>
                    <Link
                        to="/about"
                        className="nav-link"
                        activeClassName="active-link"
                        onClick={() => setShow(false)}
                    >
                        About
                    </Link>
                    <div className="nav-link contact-link">
                        <Link to="/contact" className="btn">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}