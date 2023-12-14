// landing image section
import SearchBar from './SearchbarContainer'
import { motion } from "framer-motion"
import style from '../pages/Home/css/home.module.css'
function LandingContainer() {
  return (
    <>
      <div className="container p-3 p-lg-0" id={style['landing-contianer']}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 order-lg-1">
            {/* Empty column to create space on the left */}
            <div className={style['landing-side-paragraph']}>
              <motion.span
               initial={{ opacity: 0, x: "100%"  }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{
                   ease: "linear",
                   duration: 0.5,
                   y: { duration: 1 },
                   delay:0
               }}
              >Find</motion.span>
              <br />
              <motion.b
              initial={{ opacity: 0, x: "100%"  }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                  ease: "linear",
                  duration: 0.5,
                  y: { duration: 1 },
                  delay:0
              }}
              >Apply &</motion.b>
              <br />
              <motion.span>Get hired</motion.span>
              <SearchBar/>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 d-none d-lg-block">
            <div className="home-poster">
              <div className={style['landing-image-container']}>
                <img className={style['landing-image']} src="images/bussinessman.png" alt="bussinessman" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}





export default LandingContainer;
