import React from 'react'
import { BsCheck2Square } from 'react-icons/bs'
import experienceData from '../../experienceData'

export default function Experience() {
  return (
    <>
      {experienceData.map((item) => {
        return (
          <div className="experience-container">
            <div className="start-date">
              <div>{item.startDate}</div>
            </div>
            <div className="vertical-line">
              <div></div>
            </div>
            <div className="job-title">
              <div>{item.jobTitle}</div>
            </div>
            <div className="horizontal-line">
              <div></div>
            </div>
            <div className="circle">
              <div></div>
            </div>
            <div className="end-horizontal-line">
              <div></div>
            </div>
            <div className="end-date">
              <div>{item.endDate}</div>
            </div>
            <div className="second-vertical-line">
              <div></div>
            </div>
            <div className="job-description">
              <h3>{item.jobCompany}</h3>
              <ul>
                {item.jobDescription1 && (
                  <li>
                    <BsCheck2Square className="check" />
                    <p>{item.jobDescription1}</p>
                  </li>
                )}
                {item.jobDescription2 && (
                  <li>
                    <BsCheck2Square className="check" />
                    <p>{item.jobDescription2}</p>
                  </li>
                )}
                {item.jobDescription3 && (
                  <li>
                    <BsCheck2Square className="check" />
                    <p>{item.jobDescription3}</p>
                  </li>
                )}
                {item.jobDescription4 && (
                  <li>
                    <BsCheck2Square className="check" />
                    <p>{item.jobDescription4}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )
      })}
    </>
  )
}
