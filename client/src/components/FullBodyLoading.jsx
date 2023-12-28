import React, { useState, useEffect } from 'react';
import style from '../css/fullLoading.module.css';

const FullBodyLoading = (props) => {
    const [visibilityState, setVisibilityState] = useState('block');

    useEffect(() => {
        let timeoutId;

        const showLoader = () => {
            timeoutId = setTimeout(() => {
                setVisibilityState('none');
            }, 1000);
        };

        if (props.visibility === 'none') {
            // Show the loader
            setVisibilityState('grid');

            // Trigger hiding after 2 seconds
            showLoader();
        } else {
            // If visibility is not 'block', hide instantly
            setVisibilityState('none');
        }

        // Cleanup: Clear the timeout if the component unmounts or the visibility changes
        return () => {
            clearTimeout(timeoutId);
        };
    }, [props.visibility]);

    return (
        <div className={style.FullBodyLoadingMain} style={{ display: visibilityState }}>
            <div className='d-flex flex-column gap-3 align-items-center'>
                <div className={style.loader}></div>
                <div>Join and Grow together</div>
            </div>
        </div>
    );
};

export default FullBodyLoading;
