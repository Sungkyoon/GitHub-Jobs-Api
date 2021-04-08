import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import JobDetail from './JobDetail';
import { Link } from 'react-router-dom';
// import '../public/css/job.css';

export default function Job(props) {
  const { job, timeAgo, setClick, setJob } = props;

  return (
    <Card
      className='jobCard'
      onClick={() =>
        setClick((click) => {
          setJob(job);
          return !click;
        })
      }
    >
      <div className='jobContainer'>
        <div>
          <img
            className='jobImg'
            height='50'
            alt={job.company}
            src={job.company_logo}
          />
          <h6 className='jobCreateAndType'>
            {timeAgo(job.created_at)} - {job.type}
          </h6>
          <h4 className='jobTitle'>{job.title}</h4>
          <h6 className='jobCompany'>{job.company}</h6>
          <p className='jobLocation'>{job.location}</p>
        </div>
      </div>
    </Card>
  );
}
