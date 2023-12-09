import React from 'react'
import { motion } from "framer-motion"

// information - 3 Common
function DescriptionThree() {
    return (<>
        <section className="sec-4">

            <div className="row gap-lg-5 gap-1  description-one">
                <motion.div className="col-lg-5 col-12 mt-5"
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{ x: 100 }}
                transition={{
                    ease: "linear",
                    duration: 2,
                    x: { duration: 1 }
                }}
                >
                    <img src="images/globe_companies.png" alt="worker image" />
                </motion.div>
                <div className="col-lg-6 col-12 mt-5">
                    <motion.h2 className="fw-bold"
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 1 }}
                    transition={{
                        ease: "linear",
                        duration: 0.5,
                        y: { duration: 1 }
                    }}
                    >We traverse the vast expanse of our Earth, encircling the globe in our journey.</motion.h2>
                    <p>Embarking on a global odyssey, we weave our presence across continents, connecting hearts and souls in the rhythm of shared experiences.</p>


                </div>
            </div>

        </section>
    </>);
}

export default DescriptionThree