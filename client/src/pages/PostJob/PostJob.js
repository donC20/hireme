import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Navbarcommon from '../../components/Navbarcommon'
import style from './css/postJob.module.css'
import 'react-toastify/dist/ReactToastify.css';
const PostJob = () => {

    let [loadingState, setLoadingState] = useState(false);



    // Toast
    const notify = (toastMessage, status) => {
        switch (status) {
            case 'success':
                toast.success(toastMessage, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
                break;
            default:
                // Default to info if the status is not recognized
                toast.error(toastMessage, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Extract form data
        const formData = {
            jobTitle: document.getElementById('jobTitle').value,
            salary: `$${document.getElementById('minSal').value} - $${document.getElementById('maxSal').value}`,
            location: document.getElementById('jobLocation').value,
            jobType: document.getElementById('jobType').value,
            experience:`${document.getElementById('minExp').value} - ${document.getElementById('maxExp').value} years`,
            companyName: "testCompany Inc",
            expirationDate: document.getElementById('expirationDate').value,
            jobDescription: document.getElementById('jobDescription').value,
        };
        setLoadingState(true);
        try {
            const response = await fetch('/api/jobposts/JDIEodHDFND93DKW-KJSJJFJKSMs345k/addPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Post successful!');
                setLoadingState(false);
                notify('Job Posted Successfully!', 'success');
                // Handle success, maybe redirect or show a success message
            } else {
                console.error('Post failed', 'error');
                setLoadingState(false);
                notify('Job Post Failed!');

                // Handle error, maybe show an error message
            }
        } catch (error) {
            console.error('Error during post:', error);
        }
    };



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
                        <div className='card-body d-block d-lg-flex flex-row justify-content-between align-items-center p-5'>
                            <div className={style.dataEntryForm}>
                                <div className="form-floating mb-3 ">
                                    <input type="text" name='jobTitle' className="form-control shadow-none" id="jobTitle" placeholder="Eg : Software Engineer" />
                                    <label htmlFor="jobTitle"><i className="bi bi-alphabet-uppercase me-2"></i>Job title</label>
                                </div>
                                <div className='row g-1'>
                                    <div className="form-floating mb-3 col-12 col-lg-6">
                                        <input type="number" name='salary' className="form-control shadow-none" id="minSal" placeholder="Eg : 10000" />
                                        <label htmlFor="minSal"><i className="bi bi-currency-rupee me-2"></i>Min salary</label>
                                    </div>
                                    <div className="form-floating mb-3 col-12 col-lg-6">
                                        <input type="number" className="form-control shadow-none" id="maxSal" placeholder="Eg : 50000" />
                                        <label htmlFor="maxSal"><i className="bi bi-currency-rupee me-2"></i>Max salary</label>
                                    </div>
                                </div>
                                <div className="form-floating mb-3 ">
                                    <input type="text" name='location' className="form-control shadow-none" id="jobLocation" placeholder="Eg : Bangalore" />
                                    <label htmlFor="jobLocation"><i className="bi bi-geo-alt-fill me-2"></i>Location</label>
                                </div>
                                <div className="form-floating mb-3 ">
                                    <input type="text" name='jobType' className="form-control shadow-none" id="jobType" placeholder="Eg : Full time" />
                                    <label htmlFor="jobType"><i className="bi bi-tag-fill me-2"></i>Job type</label>
                                </div>
                                <div className='row g-1'>
                                    <div className="form-floating mb-3 col-12 col-lg-6">
                                        <input type="number" className="form-control shadow-none" id="minExp" placeholder="Eg : 0" />
                                        <label htmlFor="minExp"><i className="bi bi-briefcase-fill me-2"></i>Min Experience</label>
                                    </div>
                                    <div className="form-floating mb-3 col-12 col-lg-6">
                                        <input type="number" className="form-control shadow-none" id="maxExp" placeholder="Eg : 3" />
                                        <label htmlFor="maxExp"><i className="bi bi-briefcase-fill me-2"></i>Max Experience</label>
                                    </div>
                                </div>
                                <div className="form-floating mb-3 ">
                                    <input type="date" name='expirationDate' className="form-control shadow-none" id="expirationDate" placeholder="Eg : 12/12/2022" />
                                    <label htmlFor="expirationDate"><i className="bi bi-hourglass-top me-2"></i>Expires on</label>
                                </div>
                                <div className="form-floating mb-3 ">
                                    <textarea name='jobDescription' className="form-control shadow-none" id="jobDescription" placeholder="Eg : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quos." rows="3"></textarea>
                                    <label htmlFor="jobDescription"><i className="bi bi-sticky-fill me-2"></i>Job description</label>
                                </div>
                                <button className={`${style.SubmitBtn}`} onClick={handleSubmit} disabled={loadingState}>
                                    {loadingState ? <div className={style.loader}></div> : "Post"}
                                </button>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover={false}
                                    theme="colored"
                                />
                            </div>
                            <div className="d-none d-lg-block">
                                <img src='svg/man-walking.svg' alt='man-walking' />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}



export default PostJob