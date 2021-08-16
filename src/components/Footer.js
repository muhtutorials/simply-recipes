import React from 'react';

export default function NavBar() {
    return (
        <footer className="page-footer">
            <p>
            	&copy; {new Date().getFullYear()} <span>Simple Recipes</span>. Built with{" "} <a href="https://www.gatsbyjs.com/">Gatsby</a>
        	</p> 
        </footer>
    );
}