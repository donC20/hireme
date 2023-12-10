import React from 'react';
import styles from '../css/jobsearchbar.module.css';

const JobSearchBar = () => {
  return (
    <div>
      <div className={`container p-4`}>
        <div className={`d-flex flex-column flex-lg-row justify-content-center w-100 ${styles.searchInputContainer}`}>
          <div className='icon-container'>
            <i class="bi bi-book"></i>
            <input placeholder='Job title, keywords' className={styles.searchInput} />
          </div>
          <input placeholder='Location' className={styles.locationInput} />
          <div className='d-flex flex-row'>
            <input placeholder='Experience' className={styles.experienceInput} />
            <button className={`${styles.searchButton}`}><i className='bi bi-search'></i></button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobSearchBar;
