import React from 'react'
import { motion } from "framer-motion"
import style from '../pages/Home/css/home.module.css'



const pricingCards = [
  {
    name: 'Basic', 
    price: '$299.00',
    image: 'basicPrice.png',
    delay: 0
  },
  {
    name: 'Standard',
    price: '$399.00',
    image: 'standardPrice.png', 
    delay: 0.5
  },
  {
    name: 'Premium',
    price: '$499.00',
    image: 'premiumPrice.png',
    delay: 1
  }
];

const features = [
  '30 job posting',
  '3 featured job', 
  'Job displayed for 15 days',
  'Premium Support 24/7'
];

export default function PricingContainer() {

  return (
    <section className="sec-5">

      <motion.div 
        className={`${style['price-modal']} mt-lg-0 mt-5`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <motion.h2 
          className="fw-bold text-center"
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}  
        >
          Choose a plan that's right for you.
        </motion.h2>

        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur<br/>
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        </p>

        <div className="row gx-4 gy-4 justify-content-center">
          
          {pricingCards.map(card => (
            <PricingCard 
              key={card.name}
              name={card.name}
              price={card.price}
              image={card.image}
              features={features}
              delay={card.delay} 
            />
          ))}

        </div>

      </motion.div>

    </section>
  );

}

function PricingCard({ name, price, image, features, delay }) {

  return (
    <motion.div 
      className="col-12 col-lg-4 col-md-6"
      initial={{ y: '100%', opacity: 0}}
      whileInView={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5, delay }}
    >

      <div className={`card ${style['pricing-card']}`}>
      
        <div className="card-body">

          <div className="d-flex flex-column gap-2 align-items-center">
            <b>{name}</b> 
            <strong>{price}</strong>
            <img src={`icons/${image}`} alt={`${name} image`} />
          </div>

          <div className={`${style['PriceTerms-list']} mt-4`}>
            <ul>
              {features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={`row justify-content-center p-3 ${style['cartBtn-container']}`}>
            <button className={style['addTo-cartBtn']}>
              <span className="btn-txt">Add to cart</span>
            </button>  
          </div>

        </div>
      </div>

    </motion.div>
  );
}

