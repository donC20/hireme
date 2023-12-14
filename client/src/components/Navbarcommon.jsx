import React from 'react'
import { Link } from 'react-router-dom'
import JobCss from '../css/navbarCommon.module.css'
function Navbarcommon() {
    return (
        <div>
            {/* Small screen nav bar */}
            <nav class={`navbar bg-white d-block d-lg-none ${JobCss.navJob}`}>
                <div class="container-fluid">
                    <Link className={`navbar-brand ${JobCss.navJobbrand}`} to="/">HireMe</Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class={`offcanvas-title ${JobCss.canvasJobBrand}`} id="offcanvasNavbarLabel">HireMe</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul className="navbar-nav me-auto mb-2 gap-3 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${JobCss.JobNavLink}`} aria-current="page" to={'/'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${JobCss.JobNavLink} ${JobCss.active}`}>Jobs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${JobCss.JobNavLink}`} to={'/discussions'}>Discussions</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link ${JobCss.JobNavLink}`} aria-disabled="true" to={'/learn'}>Learn</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${JobCss.JobNavLink}`} aria-disabled="true" to={'/contact'}>Contact us</Link>
                                </li>
                            </ul>
                            <div className={`d-flex flex-column align-items-start ${JobCss.navJobAccounts}`}>
                                <button className='btn btn-transperant'>Login</button>
                                <span>Or</span>
                                <button className='btn btn-transperant'>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Large screen navigation bar */}
            <nav className={`navbar navbar-expand-lg p-lg-3 d-none d-lg-block  ${JobCss.navJob}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand ${JobCss.navJobbrand}`} to="/">HireMe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 gap-3 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${JobCss.JobNavLink}`} aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${JobCss.JobNavLink} ${JobCss.active}`}>Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${JobCss.JobNavLink}`} to={'/discussions'}>Discussions</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${JobCss.JobNavLink}`} aria-disabled="true" to={'/learn'}>Learn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${JobCss.JobNavLink}`} aria-disabled="true" to={'/contact'}>Contact us</Link>
                            </li>
                        </ul>
                        <div>
                            <ul className={`d-flex gap-3 align-items-center ${JobCss.navJobAccounts}`}>
                                <li>
                                    <Link to={'/login'}>Login</Link>

                                </li>
                                <li>
                                    <span>|</span>
                                </li>
                                <li>
                                    <Link to={'/register'}>Register</Link>

                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbarcommon