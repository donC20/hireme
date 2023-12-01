import React from "react";
import CardOpp from "./components/card_oppertunity";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import companiesData from './components/json/company.json';
function ContentSection() {
    return (
        <>
            <div className="container p-3 mt-5">

                <TopRecrutersList />
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
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
                        <img  src={item.logo} alt={item.name} />
                    </div>
                ))}
            </Slider>
        </>

    );
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