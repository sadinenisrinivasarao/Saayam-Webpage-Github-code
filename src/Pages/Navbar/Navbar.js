
import "./NavBar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <img src="https://saayam.vercel.app/_next/image?url=%2Flogo.png&w=64&q=75" alt="logo" />

            <nav className="nav" ref={navRef}>

                <ul>
                    <CustomLink to="/home">Home</CustomLink>

                    <CustomLink to="/directors">Board of Directors</CustomLink>
                    <CustomLink to="/Donation">Donation</CustomLink>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </ul>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;

