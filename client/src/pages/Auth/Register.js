import { useState, React } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import style from './css/register.module.css'
import YesNoToggler from '../../components/yesNoToggler'
import LoadingProgress from '../../components/LoadingProgress'
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [loadingState, setLoadingState] = useState('none');



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


    const createUser = async (e) => {
        setLoadingState('block');
        const body = {
            name: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            userType: document.getElementById('userType').value,

        }
        console.log(body);

        try {

            const response = await fetch('/api/jobposts/JDIEodHDFND93DKW-KJSJJFJKSMs345k/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });


            if (response.ok) {
                console.log($('#username').val());
                console.log('Post successful!');
                setLoadingState('none');
                // setLoadingState(false);
                notify('Registration successfull', 'success');
                // Handle success, maybe redirect or show a success message
            } else {
                console.error('Unable to proceed', 'error');
                setLoadingState('none');

                // setLoadingState(false);
                notify('Unable to proceed');

                // Handle error, maybe show an error message
            }
        } catch (error) {
            console.log('Error during post:', error);
        }
    }

    return (
        <div className={`row ${style.body}`}>
            <div className={`col-lg-6 d-none d-lg-block ${style.sidetext}`}>
                <h1 className='pt-5 ps-5'>Come, Join Us!</h1>
                <div className='d-flex align-items-center gap-3 ps-5'>
                    <hr className={style.sideLine} />
                    <span className=''>Millions of users trust <span className={style.companyName}>HireMe</span></span>
                </div>
            </div>
            <div className={`col-lg-6 col-12 p-0 p-lg-5`}>
                <div className={`${style.formBodyOuter}`}>
                    <div className={` ${style.formBody}`}>
                        <LoadingProgress display={loadingState} />
                        <div className={style.loadingMask} style={{ display: loadingState }}>

                        </div>

                        <div className="p-5">
                            <div className={`text-center mb-4 ${style.brandName}`}>
                                <h3 >HireMe</h3>
                                <span>Please enter your details</span>
                                <div className={` mt-3 row gap-3 justify-content-center align-items-center ${style.socialMenus}`}>
                                    <button className='col-3'><i className="bi bi-linkedin"></i></button>
                                    <button className='col-3'><i className="bi bi-meta"></i></button>
                                    <button className='col-3'><i className="bi bi-google"></i></button>
                                </div>
                                <div className="mt-2 d-flex align-items-center gap-3">
                                    <hr className={style.sideLine} />
                                    <span>OR</span>
                                    <hr className={style.sideLine} />
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="username" placeholder="name@example.com" />
                                <label htmlFor="username"><i className="bi bi-alphabet me-2"></i>How do we call you?</label>
                                <small className={`text-danger ${style.errorText} ${style.errorTextUsername}`}>Error</small>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                <label htmlFor="email"><i className="bi bi-at me-2"></i>Your email</label>
                                <small className={`text-danger ${style.errorText} ${style.errorTextEmail}`}>Error</small>

                            </div>
                            <div className="position-relative">
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="password" placeholder="name@example.com" />
                                    <label htmlFor="password"><i className="bi bi-key me-2"></i>Set up new password</label>
                                    <small className={`text-danger ${style.errorText} ${style.errorTextPassword}`}>Error</small>

                                </div>
                                <i className="bi bi-eye me-2 position-absolute top-0 end-0 text-light mt-3 me-4"></i>
                            </div>

                            <div className="d-flex justify-content-between">
                                <span className={style.isEmployer}>I am an employer</span>
                                <YesNoToggler />
                            </div>

                            <div className="d-flex justify-content-center w-100 gap-3 mt-4">
                                <button id={style.registerBtn} onClick={createUser}>Continue</button>
                                <button id={style.loginBtn}>Already have an account?</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
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
    )
}


export default Register