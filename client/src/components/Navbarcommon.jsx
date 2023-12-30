import { useEffect, useState, React } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import styles from '../css/navbarCommon.module.css'
import { CommonSession, EndLife, SessionValue } from '../hooks/sessionHooks';
function Navbarcommon() {
    const navigate = useNavigate();

    // session
    const [sessiontoken, setSessionToken] = useState(false);
    useEffect(() => {
        const isSession = async () => {
            try {
                await CommonSession(navigate);
                const token = await SessionValue();
                // console.log(token);

                // Use functional update to ensure that the new state depends on the previous state
                setSessionToken(prevSessionToken => {
                    if (!prevSessionToken || !prevSessionToken.valid || token.valid) {
                        return token;
                    }
                    return prevSessionToken;
                });
            } catch (error) {
                console.error('Error fetching session data:', error);
            }
        };

        isSession();
    }, [navigate]);

    const logout = () => {
        console.log('loggedout');
        EndLife(navigate);
    }



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
            <nav className={`navbar bg-white d-block d-lg-none ${styles.navJob}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand ${styles.navJobbrand}`} to="/">HireMe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className={`offcanvas-title ${styles.canvasJobBrand}`} id="offcanvasNavbarLabel">HireMe</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav me-auto mb-2 gap-3 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${styles.JobNavLink} ${currentPathName === "" ? styles.active : ""}`} aria-current="page" to={currentPathName === "" ? '' : "/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${styles.JobNavLink} ${currentPathName === "jobs" ? styles.active : ""}`} to={currentPathName === "jobs" ? '' : "/jobs"}>Jobs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${styles.JobNavLink} ${currentPathName === "discussions" ? styles.active : ""}`} to={currentPathName === "discussions" ? '' : "/discussions"}>Discussions</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link ${styles.JobNavLink} ${currentPathName === "learn" ? styles.active : ""}`} aria-disabled="true" to={currentPathName === "learn" ? '' : "/learn"}>Learn</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${styles.JobNavLink} ${currentPathName === "contact" ? styles.active : ""}`} aria-disabled="true" to={currentPathName === "contact" ? '' : "/contact"}>Contact us</Link>
                                </li>
                            </ul>
                            {sessiontoken.valid && sessiontoken.userData ? (
                                <div>
                                    <ul className={`${sessiontoken.valid ? 'd-none' : 'd-flex'} gap-3 align-items-center ${styles.navJobAccounts}`}>
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
                                    <div className='dropdown-center'>
                                        <button className={`${sessiontoken.valid ? 'd-flex' : 'd-none'} ${styles.authenticatedAcc} align-items-center gap-1 rounded-pill `} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={`${sessiontoken.userData.profileImage ? sessiontoken.userData.profileImage : '/images/default_user.jpg'}`} alt='user' className='rounded-circle' id={styles.userImg} />
                                            {/* <span className='d-inline-block text-truncate' style={{ maxWidth: '125px' }}>{sessiontoken.userData.name}</span> */}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                            <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <Link className='dropdown-item' onClick={logout}>Logout</Link>
                                        </ul>
                                    </div>

                                </div>
                            ) : (
                                // Render some placeholder or loading content
                                <div>Loading...</div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Large screen navigation bar */}
            <nav className={`navbar navbar-expand-lg p-lg-3 d-none d-lg-block  ${styles.navJob}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand ${styles.navJobbrand}`} to="/">HireMe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 gap-3 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${styles.JobNavLink} ${currentPathName === "" ? styles.active : ""}`} aria-current="page" to={currentPathName === "" ? '' : "/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${styles.JobNavLink} ${currentPathName === "jobs" ? styles.active : ""}`} to={currentPathName === "jobs" ? '' : "/jobs"}>Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${styles.JobNavLink} ${currentPathName === "discussions" ? styles.active : ""}`} to={currentPathName === "discussions" ? '' : "/discussions"}>Discussions</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${styles.JobNavLink} ${currentPathName === "learn" ? styles.active : ""}`} aria-disabled="true" to={currentPathName === "learn" ? '' : "/learn"}>Learn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${styles.JobNavLink} ${currentPathName === "contact" ? styles.active : ""}`} aria-disabled="true" to={currentPathName === "contact" ? '' : "/contact"}>Contact us</Link>
                            </li>
                        </ul>
                        {sessiontoken.valid && sessiontoken.userData ? (
                            <div>
                                <ul className={`${sessiontoken.valid ? 'd-none' : 'd-flex'} gap-3 align-items-center ${styles.navJobAccounts}`}>
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
                                <div className='dropstart'>
                                    <button className={`${sessiontoken.valid ? 'd-flex' : 'd-none'} ${styles.authenticatedAcc} align-items-center gap-1 rounded-pill p-1`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={`${sessiontoken.userData.profileImage ? sessiontoken.userData.profileImage : '/images/default_user.jpg'}`} alt='user' className='rounded-circle' id={styles.userImg} />
                                        <span className='d-inline-block text-truncate' style={{ maxWidth: '125px' }}>{sessiontoken.userData.name}</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <Link className='dropdown-item' onClick={logout}>Logout</Link>
                                    </ul>
                                </div>

                            </div>
                        ) : (
                            // Render some placeholder or loading content
                            <div>Loading...</div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbarcommon