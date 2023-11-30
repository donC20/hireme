import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
function LandingSection() {
  return (
    <>
      <NavBar />
      <LandingImage />
    </>
  );
}

// landing image section
function LandingImage() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 order-lg-1">
            {/* Empty column to create space on the left */}
            <div className='landing-side-paragraph'>
              <span>Find</span>
              <br />
              <b>Apply &</b>
              <br />
              <span>Get hired</span>
              <SearchBar />
            </div>
          </div>
          <div className="col-lg-6 order-lg-2">
            <div className="home-poster">
              <div className='landing-image-container'>
                <img className='landing-image' src="images/bussinessman.png" alt="bussinessman" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}





export default LandingSection;
