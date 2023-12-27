import React from 'react'
import style from '../css/loadingProgress.module.css'
const LoadingProgress = (props) => {
    return (
        <div className={style.loader} style={{ display: props.display }}></div>
    )
}

export default LoadingProgress