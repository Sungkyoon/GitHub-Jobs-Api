import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button, Card } from 'react-bootstrap';

export default function JobDetail(props) {
  const { job, click, setClick } = props;
  console.log(job);
  return (
    <div>
      <div>
        <button
          className='buttonDetail'
          type='button'
          onClick={() => setClick((click) => !click)}
        >
          Back
        </button>
      </div>
      <div className='jobDetailHeader'>
        <img
          className='jobImgDetail'
          alt={job.company}
          src={job.company_logo}
        />
        <div className='jobDetailHeaderDiv'>
          <h3 className='jobDetailHeaderCompany'>{job.company}</h3>
          <h5 className='jobDetailHeaderLocation'>{job.location}</h5>
        </div>
        <div className='jobDetailButtonDiv'>
          <Button className='jobDetailButton'>
            <a className='buttonText' href={job.company_url}>
              Company Site
            </a>
          </Button>
        </div>
      </div>
      <div className='jobDetailDescription'>
        <ReactMarkdown
          className='jobDetailDescriptionText'
          source={job.description}
        />
      </div>
      <div className='jobDetailHowToApply'>
        <Card>
          <Card.Text className='jobDetailHowToApplyText'>
            How To Apply
          </Card.Text>
          <Card.Body className='jobDetailHowToApplyBody'>
            {job.how_to_apply}
          </Card.Body>
        </Card>
      </div>

      <div className='applyNow'>
        <div className='headerDetails'>
          <h3 className='jobDetailHeaderCompany'>{job.company}</h3>
          <h5 className='jobDetailHeaderLocation'>{job.location}</h5>
        </div>
        <Button className='howToApplyButton'>
          <a className='buttonTextApply' href={job.company_url}>
            Apply Now
          </a>
        </Button>
      </div>
    </div>
  );
}
