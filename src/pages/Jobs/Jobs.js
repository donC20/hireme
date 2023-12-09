import React from 'react'
import './css/jobs.module.css'
import Footer from '../../components/FooterContainer';
import Navbarcommon from '../../components/Navbarcommon';
import JobSearchBar from '../../components/JobSearchBar';
function Jobs() {
  return (
    <div className='jobBody'>
      <Navbarcommon/>
      <JobSearchBar/>
      <Footer />
    </div>
  )
}

export default Jobs