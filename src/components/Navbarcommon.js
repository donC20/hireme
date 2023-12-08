import React from 'react'
import { Link } from 'react-router-dom'
import JobCss from '../css/navbarCommon.module.css'
function Navbarcommon() {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg p-lg-3  ${JobCss.navJob}`}>
                <div className="container-fluid">
                    <Link  className={`navbar-brand ${JobCss.navJobbrand}`} to="/">HireMe</Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link  className="nav-link active" aria-current="page" href="#">Home</Link> 
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" href="#">Jobs</Link> 
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" href="#">Discussions</Link> 
                            </li>
                            
                            <li className="nav-item">
                                <Link  className="nav-link" aria-disabled="true">Learn</Link> 
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" aria-disabled="true">Constact us</Link> 
                            </li>
                        </ul>
                        <div className={`d-flex gap-3 align-items-center ${JobCss.navJobAccounts}`}>
                            <button className='btn btn-transperant'>Login</button>
                            <span>|</span>
                            <button className='btn btn-transperant'>Register</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbarcommon