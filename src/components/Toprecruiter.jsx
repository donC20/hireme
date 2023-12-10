import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import companiesData from '../json/company.json';
import style from '../pages/Home/css/home.module.css'

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
            <div className={`fw-bold mt-3 ${style['top-headings']}`}>Top recruiters</div>
            {/* <hr/> */}
            <Slider {...settings}>
                {companiesData.companies.map(item => (
                    <div className={`row mt-2 g-3 ${style['company-slider']}`} key={item}>
                        <img src={item.logo} alt={item.name} />
                    </div>
                ))}
            </Slider>
        </>

    );
}

export default TopRecrutersList