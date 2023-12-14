import React from 'react'
import style from '../css/jobTile.module.css'
function JobTile(props) {
    return (
        <div className='col-12 col-md-6 col-lg-4 col-xl-4 mt-3'>
            <div className={`card  ${style.jobCard}`}>
                <div className='card-body'>
                    <div className={`d-flex gap-1 flex-row justify-content-between ${style.card_header}`}>
                        <h6 className={style['card-title']}>{props.cardContent.jobTitle}</h6>
                        <i className="bi bi-bookmark"></i>
                    </div>
                    <p className={style.company_name}>{props.cardContent.companyName}</p>
                    <div className={`d-flex flex-column ${style.description_list}`}>
                        <div className='d-flex flex-row align-items-center gap-2'>
                            <i className="bi bi-geo-alt"></i>
                            <span className='text-truncate'>{props.cardContent.location}</span>
                        </div>
                        <div className='d-flex flex-row align-items-center gap-2'>
                            <i className="bi bi-person-workspace"></i>
                            <span className='text-truncate'>{props.cardContent.jobType}</span>
                        </div>
                        <div className='d-flex flex-row align-items-center gap-2'>
                            <i className="bi bi-briefcase"></i>
                            <span className='text-truncate'>{props.cardContent.experience}</span>
                        </div>
                        <div className='d-flex flex-row align-items-center gap-2'>
                            <i className="bi bi-calendar"></i>
                            <span>Till {props.cardContent.expirationDate}</span>
                        </div>
                    </div>
                </div>
                <div className={`card-footer bg-transparent border-0 ${style.cardFooter}`}>
                    <span className={style.postedTime}><i class="bi bi-clock-fill"></i> {props.cardContent.postingDate}</span>
                </div>

            </div>
        </div>
    )
}

export default JobTile