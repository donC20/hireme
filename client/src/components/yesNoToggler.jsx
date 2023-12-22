import React from 'react';
import styles from '../css/yesNoToggler.module.css';

const YesNoToggler = () => {
    return (
        <div>
            <div className={styles['toggle-button-cover']}>
                <div id={styles["button-3"]} className={`${styles.button} ${styles.r}`}>
                    <input className={styles.checkbox} id='userType' name='employer' type="checkbox"/>
                    <div className={styles.knobs}></div>
                    <div className={styles.layer}></div>
                </div>
            </div>
        </div>
    );
}

export default YesNoToggler;
