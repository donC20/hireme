import React from 'react';
import styles from '../css/jobsearchbar.module.css';

const JobSearchBar = () => {
  return (
    <div>
      <div className={styles.searchBackContainer}>
        <div className={`container p-4`}>
          <div className={`d-flex flex-column gap-1 gap-lg-0 flex-lg-row justify-content-center  w-100 ${styles.searchInputContainer}`}>
            <div className={`position-relative ${styles.paddedInput}`}>
              <input placeholder='Job title, keywords' className={styles.searchInput} />
              <i className="bi bi-compass"></i>
            </div>

            <div className={`position-relative ${styles.paddedInput}`}>
              <input placeholder='Location' className={styles.locationInput} />
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className={`position-relative ${styles.paddedInput}`}>
              <div className='d-flex flex-row'>
                <input placeholder='Experience' className={styles.experienceInput} />
                <button className={`${styles.searchButton}`}><i className='bi bi-search'></i></button>
                <i className="bi bi-briefcase"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobSearchBar;
