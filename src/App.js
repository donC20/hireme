import React, { useEffect } from "react";
import TopRecrutersList from "./components/Toprecruiter";
import LandingContainer from "./components/Landing";
import { EnableSmoothScroll } from "./hooks/utils";
import DescriptionOne from "./components/DescriptionOne";
import DemandedJobs from "./components/DemandJobs";
import DescriptionTwo from "./components/DescriptionTwo";
import DescriptionThree from "./components/DescriptionThree";
import PricingContainer from "./components/PricingContainer";
import UserMatrics from "./components/UserMatrics";
import Footer from "./components/FooterContainer";
import NavbarContainer from "./components/NavbarContainer";
function ContentSection() {
    useEffect(() => {
        EnableSmoothScroll();
    }, [])
    return (
        <>
            <header id="home-landing">
                <NavbarContainer/>
                <LandingContainer />
            </header>
            <div className="container p-3 mt-5 position-relative">
                <DescriptionOne/>
                <DemandedJobs/>
                <DescriptionTwo/>
                <DescriptionThree/>
                <PricingContainer/>
                <UserMatrics/>
                <TopRecrutersList />
                {/* <FabButton /> */}
            </div>
            <Footer/>
        </>);
}




















export default ContentSection;