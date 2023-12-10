import React from 'react'
import style from '../css/jobDisplayArea.module.css'
import JobTile from './JobTile'
import jobPost from '../json/jobpost.json'
const jobsList = <div className='col-12 col-lg-10'>
    <div className={`mt-2 row g-4 ${style.area_one}`}>
        <small>New jobs</small>
        {jobPost.jobPostings.map(job => {
            return (
                <JobTile cardContent={{
                    jobTitle: job.jobTitle,
                    salary: job.salary,
                    location: job.location,
                    companyName: job.companyName,
                    jobType: job.jobType,
                    postingDate: job.postingDate,
                    expirationDate: job.expirationDate,
                    experience: job.experience,
                }} />
            )
        })}
    </div>
</div>
const JobDisplayArea = () => (
    <div className='container'>
        <div className={`row ${style['job-display-area']}`}>
            {jobsList}
            <div className='col-lg-2 d-none d-lg-block'>
                <div className={`mt-2 row g-4 ${style.area_two}`}>
                    <small>Bookmarked</small>

                </div>
            </div>
        </div>
    </div>
)

export default JobDisplayArea