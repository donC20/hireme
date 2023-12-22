import React from 'react'
import style from './css/register.module.css'
import YesNoToggler from '../../components/yesNoToggler'

const Register = () => {
    return (
        <div className={`row ${style.body}`}>
            <div className={`col-6 ${style.sidetext}`}>
                <h1 className='pt-5 ps-5'>Come, Join Us!</h1>
                <div className='d-flex align-items-center gap-3 ps-5'>
                    <hr className={style.sideLine} />
                    <span className=''>Millions of users trust <span className={style.companyName}>HireMe</span></span>
                </div>
            </div>
            <div className={`col-6 p-5`}>
                <div className={`${style.formBodyOuter}`}>

                    <div className={`p-5 ${style.formBody}`}>
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
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput"><i className="bi bi-alphabet me-2"></i>How do we call you?</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="emal" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput"><i className="bi bi-at me-2"></i>Your email</label>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className='text-light'>I am an employer</span>
                            <YesNoToggler />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register