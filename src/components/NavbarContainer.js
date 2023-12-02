import React from "react";
function NavbarContainer() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a  className="navbar-brand ps-3" href="#">HireMe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Center items using custom styles */}
                        <ul className="navbar-nav mx-auto mb-2 gap-lg-4 mb-lg-0 navBar-links">
                            <li className="nav-item">
                                <a href="#" className="nav-link active" aria-current="page">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link" >Graduate</a>
                            </li> */}
                           
                            <li className="nav-item">
                                <a href="#" className="nav-link" aria-disabled="true">Jobs</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" aria-disabled="true">Discussions</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" aria-disabled="true">Learn</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" aria-disabled="true">Contact us</a>
                            </li>
                        </ul>
                        <div className="account_section d-flex gap-1">
                            <button className="login-btn">
                                <img className="svgIcon" src="icons/login_lock.svg" alt="login" />
                                Login
                            </button>
                            <button className="signup-btn">
                                <img className="svgIcon" src="icons/sign-up.svg" alt="signup" />
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default NavbarContainer