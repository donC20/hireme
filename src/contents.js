import React from "react";
import CardOpp from "./components/card_oppertunity";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import companiesData from './components/json/company.json';
import Footer from "./components/footer";
function ContentSection() {
    return (
        <>
            <div className="container p-3 mt-5">
                <TopRecrutersList />
                <DescriptionOne />
                <DemandedJobs />
                <DescriptionTwo />
                <DescriptionThree />
                <PricingContainer />
                <UserMatrics />
            <Footer/>
            </div>
        </>);
}

// Top recruters
function TopRecrutersList() {
    //  Custom previous arrow component
    const CustomPrevArrow = ({ onClick }) => (
        <button onClick={onClick} className="custom-arrow custom-prev-arrow">
            <i className="bi bi-arrow-left-circle-fill"></i>

        </button>
    );

    // Custom next arrow component
    const CustomNextArrow = ({ onClick }) => (
        <button onClick={onClick} className="custom-arrow custom-next-arrow">
            <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // Set to true to enable autoplay
        autoplaySpeed: 2000, // Adjust the autoplay speed in milliseconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
        // prevArrow: <CustomPrevArrow />,
        // nextArrow: <CustomNextArrow />,
    };

    return (
        <>
            <span className="fw-bold top-headings">Top recruiters</span>
            {/* <hr/> */}
            <Slider {...settings}>
                {companiesData.companies.map(item => (
                    <div className="row mt-2 g-3 company-slider" key={item}>
                        <img src={item.logo} alt={item.name} />
                    </div>
                ))}
            </Slider>
        </>

    );
}

// information - 1
function DescriptionOne() {
    return (<>
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
                <button class="cta">
                    <span>Get started</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    </>);
}

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
    </>);
}

// information - 2 employer
function DescriptionTwo() {
    return (<>
        <div className="row gap-lg-5 gap-1  description-one">
            <div className="col-lg-5 col-12 mt-5 order-lg-2">
                <img src="images/employer1.jpg" alt="worker image" />
            </div>
            <div className="col-lg-6 col-12 mt-5 order-lg-1">
                <h2 className="fw-bold">Unlock Your Team's Potential: Discover Exceptional Talent on Our Job Platform!</h2>
                {/* <p>Tailored Solutions for Hiring Success: Discover a personalized approach to recruitment, ensuring you find the right fit for your team.</p> */}
                <div className="whatWeDo-list">
                    <ul>
                        <li>Empower Your Business with Top Talent: Explore a diverse pool of skilled professionals ready to contribute to your success. Effortless Hiring Excellence: Navigate through our platform to find, connect, and hire the best candidates seamlessly.</li>
                        <li>Elevate Your Team: Access a wealth of exceptional talent and build a workforce that propels your company to new heights.</li>
                    </ul>
                </div>
                <button class="cta">
                    <span>Hire now</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    </>);
}


// information - 3 Common
function DescriptionThree() {
    return (<>
        <div className="row gap-lg-5 gap-1  description-one">
            <div className="col-lg-5 col-12 mt-5">
                <img src="images/globe_companies.png" alt="worker image" />
            </div>
            <div className="col-lg-6 col-12 mt-5">
                <h2 className="fw-bold">We traverse the vast expanse of our Earth, encircling the globe in our journey.</h2>
                <p>Embarking on a global odyssey, we weave our presence across continents, connecting hearts and souls in the rhythm of shared experiences.</p>


            </div>
        </div>
    </>);
}

//pricing
function PricingContainer() {
    return (<>
        <div className="price-modal mt-lg-0 mt-5">
        <h2 className="fw-bold text-center">Choose a plan that's right for you.</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
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
                                <button class="addTo-cartBtn">
                                    <span class="btn-txt">Add to cart</span>
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
                                <button class="addTo-cartBtn">
                                    <span class="btn-txt">Add to cart</span>
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
                                <button class="addTo-cartBtn">
                                    <span class="btn-txt">Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

// user matrics
function UserMatrics() {
    return (<>
        <div className="row mt-3 gx-4 gy-4 justify-content-around user-matrics">
            <div className="col-6 col-6 col-lg-3 col-md-6 text-center">
                <h1>22k+</h1>
                <p>Jobs posted</p>
            </div>
            <div className="col-6 col-lg-3 col-md-6 text-center">
                <h1>21M+</h1>
                <p>Happy customers</p>
            </div>
            <div className="col-6 col-lg-3 col-md-6 text-center">
                <h1>75L+</h1>
                <p>Users Hired</p>
            </div>
            <div className="col-6 col-lg-3 col-md-6 text-center">
                <h1>200+</h1>
                <p>Companies</p>
            </div>
        </div>
    </>);
}


// Latest opportunities
// function LatestOppertunitySection() {
//     const items = [
//         {
//             id: 1,
//             name: "Google",
//             desc: "lorem ipsum"
//         },
//         {
//             id: 2,
//             name: "Amazon",
//             desc: "lorem ipsum"
//         },
//         {
//             id: 3,
//             name: "Yahoo",
//             desc: "lorem ipsum"
//         },
//         {
//             id: 4,
//             name: "Microsoft",
//             desc: "lorem ipsum"
//         },
//         {
//             id: 5,
//             name: "Zoho",
//             desc: "lorem ipsum"
//         },
//         {
//             id: 6,
//             name: "Soti",
//             desc: "lorem ipsum"
//         },
//         {
//             id: 7,
//             name: "Goldman Sachs",
//             desc: "lorem ipsum"
//         },
//         {
//             id: 8,
//             name: "TCS",
//             desc: "lorem ipsum"
//         },
//         {
//             id: 8,
//             name: "Facebook",
//             desc: "lorem ipsum"
//         },
//     ]
//     // Custom previous arrow component
//     const CustomPrevArrow = ({ onClick }) => (
//         <button onClick={onClick} className="custom-arrow custom-prev-arrow">
//             <i className="bi bi-arrow-left-circle-fill"></i>

//         </button>
//     );

//     // Custom next arrow component
//     const CustomNextArrow = ({ onClick }) => (
//         <button onClick={onClick} className="custom-arrow custom-next-arrow">
//             <i className="bi bi-arrow-right-circle-fill"></i>
//         </button>
//     );
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true, // Set to true to enable autoplay
//         autoplaySpeed: 2000, // Adjust the autoplay speed in milliseconds
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//         prevArrow: <CustomPrevArrow />,
//         nextArrow: <CustomNextArrow />,
//     };




//     return (
//         <>
//             <h3 className="fw-bold">Latest opportunities</h3>
//             <hr />
//             <Slider {...settings}>
//                 {items.map(item => (
//                     <div className="row  g-3 opp-slider" key={item}>
//                         <CardOpp data={item} />
//                     </div>
//                 ))}
//             </Slider>
//         </>

//     );
// }




export default ContentSection;