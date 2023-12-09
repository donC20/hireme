import React from 'react';
import styles from '../css/jobsearchbar.module.css';

const JobSearchBar = () => {
  return (
    <div>
      <div className={`container p-4`}>
        <div className={`d-flex flex-column flex-lg-row justify-content-center w-100 ${styles.searchInputContainer}`}>
          <input placeholder='Job title, keywords' className={styles.searchInput} />
          <input placeholder='Location' className={styles.locationInput} />
          <input placeholder='Experience' className={styles.experienceInput} />
          <button className={`${styles.searchButton}`}>Search</button>
        </div>

      </div>
    </div>
  );
};

export default JobSearchBar;
