import React from 'react'
import { useEffect, useState } from 'react'
import style from '../css/jobDisplayArea.module.css'
import JobTile from './JobTile'
// import jobPost from '../json/jobpost.json'




const JobDisplayArea = () => {
    const [jobPostings, setJobPostings] = useState(null)
    let [bookmaredItem, setBookmark] = useState([])
    useEffect(() => {

        const fetchJobpostData = async () => {
            const response = await fetch('/api/jobposts')
            const json = await response.json()
            if (response.ok) {
                setJobPostings(json)
            }
        }
        fetchJobpostData()
    }, [])

    // job bookmark function
    function bookmarkJob(job) {
        setBookmark([...bookmaredItem, job])
    }
    // remove bookmark function
    function removeBookmark(job) {
        setBookmark(bookmaredItem = bookmaredItem.filter(item => {
            return item !== job
        }))


    }

    const jobsList = <div className='col-12 col-lg-10'>
        <div className={`mt-2 row g-4 ${style.area_one}`}>
            <small>New jobs</small>
            {jobPostings && jobPostings.map(job => {
                return (
                    <JobTile key={job._id} cardContent={{
                        jobTitle: job.jobTitle,
                        salary: job.salary,
                        location: job.location,
                        companyName: job.companyName,
                        jobType: job.jobType,
                        postingDate: job.postingDate,
                        expirationDate: job.expirationDate,
                        experience: job.experience,
                    }} bookmarkFn={bookmarkJob} />
                )
            })}
        </div>
    </div>
    let bookmarkList = bookmaredItem.map(item => {
        return (
            <div className='card'>
                <div className='card-body d-flex flex-row justify-content-between'>
                    <small className='text-dark'>
                        {item}
                    </small>
                    <i class="bi bi-x-circle" onClick={() => { removeBookmark(item) }}></i>
                </div>
            </div>
        )
    })
    return (
        <div className='container'>
            <div className={`row ${style['job-display-area']}`}>
                {jobsList}
                <div className='col-lg-2 d-none d-lg-block'>
                    <div className={`mt-2 ${style.area_two}`}>
                        <small>Bookmarked</small>
                        <div className='d-flex flex-column gap-1'>
                            {bookmarkList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDisplayArea