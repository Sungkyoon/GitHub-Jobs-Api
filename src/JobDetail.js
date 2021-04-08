import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button, Card } from 'react-bootstrap';

export default function JobDetail(props) {
  const { job } = props;
  console.log(job);
  return (
    <div>
      <div className='jobDetailHeader'>
        <img
          className='jobImgDetail'
          alt={job.company}
          src={job.company_logo}
        />
        <h3 className='jobDetailHeaderCompany'>{job.company}</h3>

        <Button className='jobDetailButton'>
          <a className='buttonText' href={job.company_url}>
            Company Site
          </a>
        </Button>
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
    </div>
  );
}
