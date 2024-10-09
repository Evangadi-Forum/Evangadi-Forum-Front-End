import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ showLinks, logo, loginLogo }) => {
    return (
        <nav className={`navbar ${showLinks ? "login" : "main"}`}>
            <div className="logo">
                <img
                    src={showLinks ? loginLogo : logo}
                    alt="Logo"
                    className={showLinks ? "logo--login" : "logo--main"}
                />
            </div>

            <div className="nav-links">
                {showLinks && (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/how-it-works">How It Works</Link>
                    </>
                )}
            </div>
            <Link to="/login">
                <button className={showLinks ? "login-sign-in" : "home-sign-in"}>
                    SIGN IN
                </button>
            </Link>
        </nav>
    );
};

export default Header;
