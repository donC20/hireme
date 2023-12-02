import React from 'react'

//pricing
function PricingContainer() {
    return (<>
        <section className="sec-5">

            <div className="price-modal mt-lg-0 mt-5">
                <h2 className="fw-bold text-center">Choose a plan that's right for you.</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                <div className="row gx-4 gy-4 justify-content-center">
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="card pricing-card">
                            <div className="card-body">
                                <div className="d-flex flex-column gap-2 align-items-center">
                                    <b>Basic</b>
                                    <strong>&#36; 299.00</strong>
                                    <img src="icons/basicPrice.png" alt="basicImg" />
                                </div>
                                <div className="PriceTerms-list mt-4">
                                    <ul>
                                        <li>30 job posting</li>
                                        <li>3 featured job</li>
                                        <li>Job displayed for 15 days</li>
                                        <li>Premium Support 24/7</li>
                                    </ul>
                                </div>
                                <div className="row justify-content-center p-3 cartBtn-container">
                                    <button className="addTo-cartBtn">
                                        <span className="btn-txt">Add to cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="card pricing-card">
                            <div className="card-body">
                                <div className="d-flex flex-column gap-2 align-items-center">
                                    <b>Standard</b>
                                    <strong>&#36; 299.00</strong>
                                    <img src="icons/standardPrice.png" alt="basicImg" />
                                </div>
                                <div className="PriceTerms-list mt-4">
                                    <ul>
                                        <li>30 job posting</li>
                                        <li>3 featured job</li>
                                        <li>Job displayed for 15 days</li>
                                        <li>Premium Support 24/7</li>
                                    </ul>
                                </div>
                                <div className="row justify-content-center p-3 cartBtn-container">
                                    <button className="addTo-cartBtn">
                                        <span className="btn-txt">Add to cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="card pricing-card">
                            <div className="card-body">
                                <div className="d-flex flex-column gap-2 align-items-center">
                                    <b>Premium</b>
                                    <strong>&#36; 499.00</strong>
                                    <img src="icons/premiumPrice.png" alt="basicImg" />
                                </div>
                                <div className="PriceTerms-list mt-4">
                                    <ul>
                                        <li>30 job posting</li>
                                        <li>3 featured job</li>
                                        <li>Job displayed for 15 days</li>
                                        <li>Premium Support 24/7</li>
                                    </ul>
                                </div>
                                <div className="row justify-content-center p-3 cartBtn-container">
                                    <button className="addTo-cartBtn">
                                        <span className="btn-txt">Add to cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>);
}


export default PricingContainer