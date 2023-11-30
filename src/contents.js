import React from "react";
import CardOpp from "./components/card_oppertunity";
import { Carousel, Button } from 'react-bootstrap';
function ContentSection() {
    return (
        <>
            <div className="container pt-5">
                <LatestOppertunitySection />

            </div>
        </>);
}


// Latest opportunities
function LatestOppertunitySection() {
   const items=[
        {
            id:1,
            name:"Google",
            desc:"lorem ipsum"
        },
        {
            id:2,
            name:"Amazon",
            desc:"lorem ipsum"
        },
        {
            id:3,
            name:"Yahoo",
            desc:"lorem ipsum"
        },
        {
            id:4,
            name:"Microsoft",
            desc:"lorem ipsum"
        },
        {
            id:5,
            name:"Zoho",
            desc:"lorem ipsum"
        },
        {
            id:6,
            name:"Soti",
            desc:"lorem ipsum"
        },
        {
            id:7,
            name:"Goldman Sachs",
            desc:"lorem ipsum"
        },
        {
            id:8,
            name:"TCS",
            desc:"lorem ipsum"
        },
    ]
    return (
        <>
            <h3 className="fw-bold">Latest opportunities</h3>
            <hr />

            <Carousel
                controls
                indicators={false}
                interval={3000} // Disable automatic sliding
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon bg-primary rounded-5" />}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon bg-primary rounded-5" />}
            >
                {items.map((item, index) => (
                    <Carousel.Item key={index}>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                            {[...Array(4)].map((_, cardIndex) => (
                                <div key={cardIndex} className={`col${cardIndex > 0 ? ' d-none d-md-block' : ''}`}>
                                    {/* Only show the first card on small screens */}
                                    <CardOpp data={item} />
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default ContentSection;