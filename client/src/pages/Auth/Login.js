import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LoadingProgress from '../../components/LoadingProgress'
import style from './css/login.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { LoginToJobsSession } from '../../hooks/sessionHooks';
const Login = () => {
    const navigate = useNavigate();
    const [loadingState, setLoadingState] = useState('none');

    // session checking
    useEffect(() => {
        LoginToJobsSession(navigate);
    }, [navigate]);

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

    const navigatoRegister = () => {

        console.log('fd');
        navigate("/register");
    }


    const authenticateUser = async (e) => {
        setLoadingState('block');
        const dataBody = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        };

        try {
            const response = await fetch('/api/jobposts/JDIEodHDFND93DKW-KJSJJFJKSMs345k/userAuthenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(dataBody),
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.msg === "valid") {
                    notify('Login successful', 'success');
                    setLoadingState('none');
                    navigate('/jobs', { replace: true });
                } else {
                    setLoadingState('none');
                    notify('Invalid username or password', 'error');
                }
            } else {
                console.error('Unable to proceed', 'error');
                setLoadingState('none');
                notify('Unable to proceed', 'error');
                // Handle error, maybe show an error message
            }
        } catch (error) {
            console.log('Error during post:', error);
        }
    };


    return (

        <div>
            <div className={style.content}>
                <div className={style['flex-div']}>
                    <div className={style['name-content']}>
                        <h1 className={style.logo}>HireMe</h1>
                        <p>Search, Find & apply for millions of jobs</p>
                    </div>
                    <div className={style.formBodyOuter}>
                        <LoadingProgress display={loadingState} />
                        <div className={style.loadingMask} style={{ display: loadingState }}>
                        </div>
                        <div className={style.formBody}>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control shadow-none" id="email" placeholder="name@example.com" />
                                <label htmlFor="email"><i className="bi bi-at me-2"></i>Email / Username</label>
                                {/* <small className={`text-danger ${style.errorText} ${style.errorTextEmail}`}>Error</small> */}

                            </div>
                            <div className="position-relative">
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control shadow-none" id="password" placeholder="name@example.com" />
                                    <label htmlFor="password"><i className="bi bi-key me-2"></i>Password</label>
                                    {/* <small className={`text-danger ${style.errorText} ${style.errorTextPassword}`}>Error</small> */}

                                </div>
                                <i className="bi bi-eye me-2 position-absolute top-0 end-0 text-light mt-3 me-4"></i>
                            </div>
                            <Link to="#" className='mb-3'>Forgot Password ?</Link>
                            <div className='d-flex flex-lg-row flex-column justify-content-center gap-2'>
                                <button className={style.login} onClick={authenticateUser}>Log In</button>
                                <button className={`${style["create-account"]}`} onClick={navigatoRegister}>Create New Account</button>
                            </div>

                            <div className="mt-2 d-flex align-items-center gap-3">
                                <hr className={style.sideLine} />
                                <span className='text-secondary'>OR</span>
                                <hr className={style.sideLine} />
                            </div>
                            <button className={`${style["g-account"]}`} ><i className="bi bi-google me-2"></i>Login with Google</button>

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

export default Login