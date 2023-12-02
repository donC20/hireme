import React from 'react'

// information - 1
function DescriptionOne() {
    return (<>
        <section className="sec-1">
            <div className="row gap-lg-5 gap-1  description-one">
                <div className="col-lg-5 col-12 mt-5">
                    <img src="images/workspace1.jpg" alt="worker image" />
                </div>
                <div className="col-lg-6 col-12 mt-5">
                    <h2 className="fw-bold">Millions of jobs. Find the one that suits you.</h2>
                    <p>Discover diverse job opportunities from top companies across industries. Whether you're a seasoned pro or just starting, find positions that match your skills and interests. Take the next step in your career with us.</p>
                    <div className="whatWeDo-list">
                        <p>What we do</p>
                        <ul>
                            <li>Gather Employers and employees @ one place</li>
                            <li>Provide a seamless job search experience</li>
                            <li>Offer career resources and guidance</li>
                            <li>Connect talented professionals with innovative companies</li>
                        </ul>
                    </div>
                    <button className="cta">
                        <span>Get started</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    </>);
}

export default DescriptionOne