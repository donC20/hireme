import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom'
import styles from './css/profile.module.css'
import Navbarcommon from '../../components/Navbarcommon'
import { SessionValue } from '../../hooks/sessionHooks'

const Profile = () => {
    const [tabStates, setTabStates] = useState([true, false, false]);
    const [sessiontoken, setSessionToken] = useState(false);

    // user data
    useEffect(() => {

        const isSession = async () => {
            try {
                const token = await SessionValue();
                console.log("Fetched token:", token);

                // Use functional update to ensure that the new state depends on the previous state
                setSessionToken(prevSessionToken => {
                    if (!prevSessionToken || !prevSessionToken.valid || token.valid) {
                        return token;
                    }
                    return prevSessionToken;
                });
            } catch (error) {
                console.error('Error fetching session data:', error);
            }
        };

        isSession();
    }, []);

    // tab bar
    const tabClick = (index) => {
        setTabStates((prev) => {
            const newStates = prev.map((_, i) => (i === index ? !prev[i] : false));
            return newStates;
        });
    }


    // template - Bio data
    const bioSections = [
        {
            label: 'Email',
            icon: 'bi bi-envelope-at-fill',
            value: sessiontoken?.userData?.email,
        },
        {
            label: 'Phone',
            icon: 'bi bi-phone-fill',
            value: sessiontoken?.userData?.phone,
        },
        {
            label: 'Address',
            icon: 'bi bi-geo-alt-fill',
            value: sessiontoken?.userData?.address,
            isAddress: true,
        },
        {
            label: 'Gender',
            icon: 'bi bi-gender-ambiguous',
            value: sessiontoken?.userData?.gender,
            isAddress: true,
        },
    ];

    // temolate social data
    const socialData = [
        {
            label: 'Github',
            icon: 'bi bi-github',
            value: '',
        },
        {
            label: 'LinkedIn ',
            icon: 'bi bi-linkedin',
            value: '',
        },
        {
            label: 'Website',
            icon: 'bi bi-globe2',
            value: '',
        },

        {
            label: 'Facebook',
            icon: 'bi bi-facebook',
            value: '',
        },
        {
            label: 'Instagram',
            icon: 'bi bi-instagram',
            value: '',
        },


    ]

    return (
        <div>

            <Navbarcommon />
            <div className="container">
                <div className="main-body p-lg-4 p-3">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body p-4">
                                    {sessiontoken.valid && sessiontoken.userData ? (
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <div className={`position-relative ${styles.userProfileImg}`}>
                                                <img src={`${sessiontoken.userData.profileImage ? sessiontoken.userData.profileImage : '/images/default_user.jpg'}`} alt="userimg"
                                                    className="rounded-circle" width="150" />
                                                <button className='position-absolute bottom-0 end-0'><i className="bi bi-camera2"></i></button>
                                            </div>
                                            <div className="mt-3">
                                                <h4>{sessiontoken.userData.name}</h4>
                                                {/* <p className="text-secondary mb-1">Full Stack Developer</p> */}
                                                <button className="btn rounded-pill mt-1" id={styles.updateBtn}>Edit
                                                    profile</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="d-flex justify-content-center align-items.center">
                                            <div className={styles['loader-profile']}></div>

                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className="card mt-3 p-3">
                                <h5>Social accounts</h5>
                                <hr className='mt-0' />

                                {sessiontoken.valid && sessiontoken.userData ? (
                                    <div>
                                        {socialData.map((item, index) => (
                                            <div className={`d-flex justify-content-between align-items-center mb-2`} key={index}>
                                                <small className='fw-bold text-muted'><i className={`${item.icon} me-2`}></i>{item.label}</small>
                                                {item.value ? (
                                                    <Link className='text-muted' to={item.value}><i className="bi bi-arrow-right"></i></Link>
                                                ) : (
                                                    <small className='text-muted'>

                                                        <small><i class="bi bi-plus-circle-fill"></i></small>
                                                    </small>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="d-flex justify-content-center align-items.center">
                                        <div className={styles['loader-profile']}></div>

                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5>Bio data</h5>
                                    <hr className='mt-0' />
                                    {sessiontoken?.valid && sessiontoken?.userData ? (
                                        bioSections.map((section, index) => (
                                            <div className='col-12 mb-3' key={index}>
                                                <div className='d-flex flex-row justify-content-between'>
                                                    <small className='fw-bold'>
                                                        <i className={section.icon + ' me-2'}></i>
                                                        {section.label}
                                                    </small>
                                                    <small className='text-muted'>
                                                        {section.value ? (
                                                            section.value
                                                        ) : (
                                                            <small><i class="bi bi-plus-circle-fill"></i></small>

                                                        )}
                                                    </small>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="d-flex justify-content-center align-items.center">
                                            <div className={styles['loader-profile']}></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <ul className={`${styles.tabButtonContainer} row d-flex justify-content-between`}>
                                <li className={`${styles.tabButton} col-3 d-flex align-items-center justify-content-center
                            ${tabStates[0] ? styles.active : ''}`} onClick={() => tabClick(0)}>
                                    Applications
                                </li>
                                <li className={`${styles.tabButton} col-3 d-flex align-items-center justify-content-center
                            ${tabStates[1] ? styles.active : ''}`} onClick={() => tabClick(1)}>
                                    Saved
                                </li>
                                <li className={`${styles.tabButton} col-3 d-flex align-items-center justify-content-center
                            ${tabStates[2] ? styles.active : ''}`} onClick={() => tabClick(2)}>
                                    Rejected
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile