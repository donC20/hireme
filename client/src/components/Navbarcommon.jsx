import { useEffect, useState, React } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import style from '../css/navbarCommon.module.css'
import { CommonSession, SessionValue } from '../hooks/sessionHooks';
function Navbarcommon() {
    const navigate = useNavigate();

    // session
    const [sessiontoken, setSessionToken] = useState(false);

    useEffect(() => {
        const isSession = async () => {
            try {
                CommonSession(navigate);
                const token = await SessionValue();
                console.log(token);
                setSessionToken(token);
            } catch (error) {
                console.error('Error fetching session data:', error);
            }
        };

        isSession();
    }, []);

    // Get the current URL from the address bar
    const currentUrl = window.location.href;

    // Create a URL object
    const url = new URL(currentUrl);

    // Check if pathname is available
    let currentPathName = '';
    if (url.pathname) {
        // Splitting the pathname to get the last part
        const parts = url.pathname.split('/');
        currentPathName = parts[parts.length - 1];
    }

    return (
        <div>
            {/* Small screen nav bar */}
            <nav className={`navbar bg-white d-block d-lg-none ${style.navJob}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand ${style.navJobbrand}`} to="/">HireMe</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className={`offcanvas-title ${style.canvasJobBrand}`} id="offcanvasNavbarLabel">HireMe</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav me-auto mb-2 gap-3 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${style.JobNavLink} ${currentPathName === "" ? style.active : ""}`} aria-current="page" to={currentPathName === "" ? '' : "/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${style.JobNavLink} ${currentPathName === "jobs" ? style.active : ""}`} to={currentPathName === "jobs" ? '' : "/jobs"}>Jobs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${style.JobNavLink} ${currentPathName === "discussions" ? style.active : ""}`} to={currentPathName === "discussions" ? '' : "/discussions"}>Discussions</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link ${style.JobNavLink} ${currentPathName === "learn" ? style.active : ""}`} aria-disabled="true" to={currentPathName === "learn" ? '' : "/learn"}>Learn</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${style.JobNavLink} ${currentPathName === "contact" ? style.active : ""}`} aria-disabled="true" to={currentPathName === "contact" ? '' : "/contact"}>Contact us</Link>
                                </li>
                            </ul>
                            <div className={`${sessiontoken ? 'd-none' : 'd-flex'} flex-column align-items-start ${style.navJobAccounts}`}>
                                <Link className='btn btn-transperant' to={'/login'}>Login</Link>
                                <span>Or</span>
                                <Link className='btn btn-transperant' to={'/register'}>Register</Link>
                            </div>
                            <div className={`${sessiontoken ? 'd-block' : 'd-none'} ${style.navJobAccounts}`}>
                                <Link className='btn btn-transperant' to={'/login'}>LogOut</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Large screen navigation bar */}
            <nav className={`navbar navbar-expand-lg p-lg-3 d-none d-lg-block  ${style.navJob}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand ${style.navJobbrand}`} to="/">HireMe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 gap-3 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${style.JobNavLink} ${currentPathName === "" ? style.active : ""}`} aria-current="page" to={currentPathName === "" ? '' : "/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${style.JobNavLink} ${currentPathName === "jobs" ? style.active : ""}`} to={currentPathName === "jobs" ? '' : "/jobs"}>Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${style.JobNavLink} ${currentPathName === "discussions" ? style.active : ""}`} to={currentPathName === "discussions" ? '' : "/discussions"}>Discussions</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${style.JobNavLink} ${currentPathName === "learn" ? style.active : ""}`} aria-disabled="true" to={currentPathName === "learn" ? '' : "/learn"}>Learn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${style.JobNavLink} ${currentPathName === "contact" ? style.active : ""}`} aria-disabled="true" to={currentPathName === "contact" ? '' : "/contact"}>Contact us</Link>
                            </li>
                        </ul>
                        <div>
                            <ul className={`${sessiontoken ? 'd-none' : 'd-flex'} gap-3 align-items-center ${style.navJobAccounts}`}>
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
                            <div className={`${sessiontoken ? 'd-block' : 'd-none'} ${style.navJobAccounts}`}>
                                <Link className='btn btn-transperant' to={'/login'}>LogOut</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbarcommon