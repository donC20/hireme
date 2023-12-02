import React from "react";
import './css/footer.css'

function Footer() {
    return (<>
        <footer className="bg-white">
            <div class="container p-4 p-lg-0">
                <div className="row mt-3 gx-5 gy-4 justify-content-start align-items-center footer-container">
                    <div className="col-6 col-lg-3">
                        <div className="d-flex flex-column gap-2">
                            <a className="brand-name" href="#">HireMe</a>
                            <strong className="call-us-txt">Call us</strong>
                            <b className="call-number"><i className="bi bi-telephone-fill me-2 fs-6"></i>730 478 5202</b>
                            <span><i className="bi bi-envelope-at-fill me-2"></i>hexated100@gmail.com</span>
                            <span><i className="bi bi-house-door-fill me-2"></i>328 Queensberry Street, North Melbourne
                                VIC</span>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 footer-list-item d-lg-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column  gap-2">
                            <h5>For Candidates</h5>
                            <span><a href="">Jobs</a></span>
                            <span><a href="">Candidates</a></span>
                            <span><a href="">Candidate Dashboard</a></span>
                            <span><a href="">Job Alerts</a></span>
                            <span><a href="">My Bookmarks</a></span>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 footer-list-item d-lg-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column gap-2">
                            <h5>For Employers</h5>
                            <span><a href="">All Employers</a></span>
                            <span><a href="">Employer Dashboard</a></span>
                            <span><a href="">Submit Job</a></span>
                            <span><a href="">Job Packages</a></span>
                            <span><a href="">Companies</a></span>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 footer-list-item d-lg-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column gap-2">
                            <h5>About us</h5>
                            <span><a href="">About Us</a></span>
                            <span><a href="">Contact Us</a></span>
                            <span><a href="">Terms</a></span>
                            <span><a href="">Packages</a></span>
                            <span><a href="">FAQ</a></span>
                        </div>
                    </div>
                </div>
                <div className="mail-us-container pt-3 pb-3  d-flex flex-lg-row flex-column justify-content-center justify-content-lg-between gap-lg-0 gap-4">
                    <div className="input-group">
                        <input type="email" class="input" id="Email" name="Email" placeholder="yourmail@domain.com"
                            autocomplete="off" />
                        <input className="button--submit" value="Mail us!" type="submit" />
                    </div>
                    <div className="social-container d-flex gap-3">
                        <span className="facebook"><i className="bi bi-facebook"></i></span>
                        <span className="instagram"><i className="bi bi-instagram"></i></span>
                        <span className="twitter"><i className="bi bi-twitter"></i></span>
                        <span className="linkedin"><i className="bi bi-linkedin"></i></span>
                    </div>
                </div>
                <hr />
                <div className="copyright-area pt-lg-1 pb-lg-3 d-flex flex-column flex-lg-row justify-content-between align-items-center gap-1 gap-lg-0">
                    <span>© 2023 HireMe. All Right Reserved.</span>
                    <span>Contact me @ →&nbsp;&nbsp;<a href="https://donbenny.tech/" target="_blank">donbenny.tech</a></span>
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;