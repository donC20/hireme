import React from 'react'
import { motion } from "framer-motion"
import style from '../pages/Home/css/home.module.css'

// information - 2 employer
function DescriptionTwo() {
    return (<>
        <section className="sec-3">
            <div className={`row gap-lg-5 gap-1  ${style['description-one']}`}>
                <motion.div className="col-lg-5 col-12 mt-5 order-lg-2"
                    initial={{ opacity: 0, x: "100%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        ease: "linear",
                        duration: 2,
                        x: { duration: 1 }
                    }}
                >
                    <img src="images/employer1.jpg" alt="worker image" />
                </motion.div>
                <motion.div className="col-lg-6 col-12 mt-5 order-lg-1"
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    ease: "linear",
                    duration: 2,
                    x: { duration: 1 }
                }}
                >
                    <h2 className="fw-bold">Unlock Your Team's Potential: Discover Exceptional Talent on Our Job Platform!</h2>
                    {/* <p>Tailored Solutions for Hiring Success: Discover a personalized approach to recruitment, ensuring you find the right fit for your team.</p> */}
                    <div className={style['whatWeDo-list']}>
                        <ul>
                            <li>Empower Your Business with Top Talent: Explore a diverse pool of skilled professionals ready to contribute to your success. Effortless Hiring Excellence: Navigate through our platform to find, connect, and hire the best candidates seamlessly.</li>
                            <li>Elevate Your Team: Access a wealth of exceptional talent and build a workforce that propels your company to new heights.</li>
                        </ul>
                    </div>
                    <button className={style.cta}>
                        <span>Hire now</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>


    </>);
}


export default DescriptionTwo