import React from 'react'
import style from '../pages/Home/css/home.module.css'
// user matrics
function UserMatrics() {
    return (<>
        <div className={`row mt-3 gx-4 gy-4 justify-content-around  ${style.userMatrics}`}>
            <div className="col-6 col-6 col-lg-3 col-md-6 text-center">
                <h1>22k+</h1>
                <p>Jobs posted</p>
            </div>
            <div className="col-6 col-lg-3 col-md-6 text-center">
                <h1>21M+</h1>
                <p>Happy customers</p>
            </div>
            <div className="col-6 col-lg-3 col-md-6 text-center">
                <h1>75L+</h1>
                <p>Users Hired</p>
            </div>
            <div className="col-6 col-lg-3 col-md-6 text-center">
                <h1>200+</h1>
                <p>Companies</p>
            </div>
        </div>
    </>);
}


export default UserMatrics