import React from "react";
import { Link } from 'react-router-dom'
import thisCss from '../css/navbar.module.css'
function NavbarContainer() {
    return (
        <>

            <nav className={`navbar d-lg-none d-block ${thisCss.navHome}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand ps-3 ${thisCss.navHomebrand}`} to="#">
                        HireMe
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className={`offcanvas-title ${thisCss.canvasBrand}`} id="offcanvasDarkNavbarLabel"> <Link className="navbar-brand" to="/">
                                HireMe
                            </Link></h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className={`navbar-nav justify-content-end flex-grow-1 pe-3 ${thisCss.navHomeNav}`}>
                                <li className={`nav-item ${thisCss.navHomeItem}`}>
                                    <Link to="#" className="nav-link active" aria-current="page">
                                        Home
                                    </Link>
                                </li>
                                {/* <li className={`nav-item ${thisCss.navHomeItem}`}>
                    <Link to="#" className={`nav-link ${thisCss.navHomeLink}`} >Graduate</Link>
                </li> */}

                                <li className={`nav-item ${thisCss.navHomeItem}`}>
                                    <Link to="jobs" className={`nav-link ${thisCss.navHomeLink}`} aria-disabled="true">
                                        Jobs
                                    </Link>
                                </li>
                                <li className={`nav-item ${thisCss.navHomeItem}`}>
                                    <Link to="#" className={`nav-link ${thisCss.navHomeLink}`} aria-disabled="true">
                                        Discussions
                                    </Link>
                                </li>
                                <li className={`nav-item ${thisCss.navHomeItem}`}>
                                    <Link to="#" className={`nav-link ${thisCss.navHomeLink}`} aria-disabled="true">
                                        Learn
                                    </Link>
                                </li>
                                <li className={`nav-item ${thisCss.navHomeItem}`}>
                                    <Link to="#" className={`nav-link ${thisCss.navHomeLink}`} aria-disabled="true">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                            <div className="account_section d-flex gap-1">
                            <button className={thisCss['login-btn']}>
                                <img className={thisCss.svgIcon} src="icons/login_lock.svg" alt="login" />
                                Login
                            </button>
                            <button className={thisCss["signup-btn"]}>
                                <img className={thisCss.svgIcon} src="icons/sign-up.svg" alt="signup" />
                                SignUp
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </nav>


            <nav className={`navbar navbar-expand-lg d-none d-lg-block ${thisCss.navHome}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand ps-3 ${thisCss.navHomebrand}`} to="#">
                        HireMe
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Center items using custom styles */}
                        <ul className={`navbar-nav mx-auto mb-2 gap-lg-4 mb-lg-0 navBar-links ${thisCss.navHomeNav}`}>
                            <li className={`nav-item ${thisCss.navHomeItem}`}>
                                <Link to="/" className={`nav-link active ${thisCss.navHomeLink}`} aria-current="page">
                                    Home
                                </Link>
                            </li>
                            {/* <li className={`nav-item ${thisCss.navHomeItem}`}>
                    <Link to="#" className={`nav-link ${thisCss.navHomeLink}`} >Graduate</Link>
                </li> */}

                            <li className={`nav-item ${thisCss.navHomeItem}`}>
                                <Link to='jobs' className={`nav-link ${thisCss.navHomeLink}`} aria-disabled="true">
                                    Jobs
                                </Link>
                            </li>
                            <li className={`nav-item ${thisCss.navHomeItem}`}>
                                <Link to="#" className={`nav-link ${thisCss.navHomeLink}`} aria-disabled="true">
                                    Discussions
                                </Link>
                            </li>
                            <li className={`nav-item ${thisCss.navHomeItem}`}>
                                <Link to="#" className={`nav-link ${thisCss.navHomeLink}`} aria-disabled="true">
                                    Learn
                                </Link>
                            </li>
                            <li className={`nav-item ${thisCss.navHomeItem}`}>
                                <Link to="#" className={`nav-link ${thisCss.navHomeLink}`} aria-disabled="true">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                        <div className="account_section d-flex gap-1">
                            <button className={thisCss['login-btn']}>
                                <img className={thisCss.svgIcon} src="icons/login_lock.svg" alt="login" />
                                Login
                            </button>
                            <button className={thisCss["signup-btn"]}>
                                <img className={thisCss.svgIcon} src="icons/sign-up.svg" alt="signup" />
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