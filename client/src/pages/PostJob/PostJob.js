import React from 'react'
import { useEffect, useState } from 'react'
import Navbarcommon from '../../components/Navbarcommon'
import style from './css/postJob.module.css'
const PostJob = () => {

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await fetch('/api/jobposts/addposts', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (response.ok) {
    //             console.log('Post successful!');
    //             // Handle success, maybe redirect or show a success message
    //         } else {
    //             console.error('Post failed');
    //             // Handle error, maybe show an error message
    //         }
    //     } catch (error) {
    //         console.error('Error during post:', error);
    //     }
    // };


    return (
        <div>
            <Navbarcommon />
            <div className={style.postJobContainer}>
                <div className={`p-3 ${style.postJobHeader}`}>
                    <div className='container'>
                        <h1 className='mt-3'>Post Jobs</h1>
                        <span>Provide the full description of the job.</span>
                    </div>
                </div>
                <div className="mt-4 container p-3">
                    <div className='card'>
                        <div className='card-body d-block d-lg-flex flex-row justify-content-between align-items-center p-3'>
                            <div className={style.dataEntryForm}>
                                <div className="form-floating mb-3 ">
                                    <input type="text" name='jobTitle' className="form-control shadow-none" id="jobTitle" placeholder="Eg : Software Engineer" />
                                    <label for="jobTitle"><i className="bi bi-alphabet-uppercase me-2"></i>Job title</label>
                                </div>
                                <div className='row g-1'>
                                    <div className="form-floating mb-3 col-12 col-lg-6">
                                        <input type="number" name='salary' className="form-control shadow-none" id="minSal" placeholder="Eg : 10000" />
                                        <label for="minSal"><i className="bi bi-currency-rupee me-2"></i>Min salary</label>
                                    </div>
                                    {/* <div className="form-floating mb-3 col-12 col-lg-6">
                                        <input type="number" className="form-control shadow-none" id="maxSal" placeholder="Eg : 50000" />
                                        <label for="maxSal"><i className="bi bi-currency-rupee me-2"></i>Max salary</label>
                                    </div> */}
                                </div>
                                <div className="form-floating mb-3 ">
                                    <input type="text" name='location' className="form-control shadow-none" id="jobLocation" placeholder="Eg : Bangalore" />
                                    <label for="jobLocation"><i className="bi bi-geo-alt-fill me-2"></i>Location</label>
                                </div>
                                <div className="form-floating mb-3 ">
                                    <input type="text" name='jobType' className="form-control shadow-none" id="jobType" placeholder="Eg : Full time" />
                                    <label for="jobType"><i className="bi bi-tag-fill me-2"></i>Job type</label>
                                </div>
                                <div className='row g-1'>
                                    <div className="form-floating mb-3 col-12 col-lg-6">
                                        <input type="number" className="form-control shadow-none" id="minExp" placeholder="Eg : 0" />
                                        <label for="minExp"><i className="bi bi-briefcase-fill me-2"></i>Min Experience</label>
                                    </div>
                                    <div className="form-floating mb-3 col-12 col-lg-6">
                                        <input type="number" className="form-control shadow-none" id="maxExp" placeholder="Eg : 3" />
                                        <label for="maxExp"><i className="bi bi-briefcase-fill me-2"></i>Max Experience</label>
                                    </div>
                                </div>
                                <div className="form-floating mb-3 ">
                                    <input type="date" name='expirationDate' className="form-control shadow-none" id="expirationDate" placeholder="Eg : 12/12/2022" />
                                    <label for="expirationDate"><i className="bi bi-hourglass-top me-2"></i>Expires on</label>
                                </div>
                                <div className="form-floating mb-3 ">
                                    <textarea name='jobDescription' className="form-control shadow-none" id="jobDescription" placeholder="Eg : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quos." rows="3"></textarea>
                                    <label for="jobDescription"><i className="bi bi-sticky-fill me-2"></i>Job description</label>
                                </div>
                                <button className={style.SubmitBtn}>Post</button>
                            </div>
                            <div className="d-none d-lg-block">
                                <img src='svg/man-walking.svg' alt='man-walking' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostJob