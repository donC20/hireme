import React from 'react'

// demanded jobs
const CardComp = ({ data }) => {
    return (<>
        <div className="col-6 col-lg-3 col-md-6">
            <div className="card demand-card">
                <div className="card-body p-4">
                    <div className="icon-container mb-3 d-flex justify-content-center align-items-center">
                        <i className={`bi bi-${data.icon}`}></i>
                    </div>
                    <span className="job-category">{data.category}</span>
                    <p className="job-vacancies">{data.vacancy} vacancies</p>
                </div>
            </div>
        </div>
    </>);
}

function DemandedJobs() {
    return (<>
        <section className="sec-2">
            <div className="d-flex justify-content-between align-items-center mt-5">
                <h2 className="fw-bold">Jobs On-Demand</h2>
                <p className="all-categories-btn">All categories</p>
            </div>
            <div className="row mt-3 gx-4 gy-4 justify-content-center">
                <CardComp data={{ icon: "vector-pen", category: "Design & Development.", vacancy: "200" }} />
                <CardComp data={{ icon: "person", category: "Customer Help & Sales.", vacancy: "250" }} />
                <CardComp data={{ icon: "briefcase", category: "Bussiness & marketing.", vacancy: "370" }} />
                <CardComp data={{ icon: "telephone", category: "Bussiness Development.", vacancy: "2450" }} />
                <CardComp data={{ icon: "code-slash", category: "Programming & Code.", vacancy: "248" }} />
                <CardComp data={{ icon: "sliders", category: "Video Edition & 3D work.", vacancy: "3450" }} />
                <CardComp data={{ icon: "brush", category: "Art & Animation", vacancy: "2004" }} />
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card demand-card final-card">
                        <div className="card-body p-4 position-relative">
                            <div>
                                <h1>20k+</h1>
                                <p>Jobs posted.</p>
                            </div>
                            <div className="icon-container-final mb-3 d-flex justify-content-center align-items-center position-absolute">
                                <i className="bi bi-arrow-up-right-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default DemandedJobs