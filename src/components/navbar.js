import React from "react";
import { ReactDOM } from "react-dom";
function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">HireMe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Center items using custom styles */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 navBar-links">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Graduate</a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" aria-disabled="true">Professional</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-disabled="true">Companies</a>
                            </li>
                        </ul>
                        <div className="account_section d-flex gap-1">
                            <button className="login-btn">
                                <img className="svgIcon" src="icons/login_lock.svg" />
                                Login
                            </button>
                            <button className="signup-btn">
                                <img className="svgIcon" src="icons/sign-up.svg" />
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default NavBar