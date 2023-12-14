import React from 'react'
import './css/jobs.module.css'
import Footer from '../../components/FooterContainer';
import Navbarcommon from '../../components/Navbarcommon';
import JobSearchBar from '../../components/JobSearchBar';
import JobDisplayArea from '../../components/JobDisplayArea';
function Jobs() {
  return (
    <div className='jobBody'>
      <Navbarcommon/>
      <JobSearchBar/>
      <JobDisplayArea/>
      <Footer />
    </div>
  )
}

export default Jobs