import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs.js';
import { Container } from 'react-bootstrap';
import JobDetail from './JobDetail';
import Job from './Job';
import Header from './Header';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchJob from './SearchJob';

const epochs = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

const getDuration = (timeAgoInSeconds) => {
  for (let [name, seconds] of epochs) {
    const interval = Math.floor(timeAgoInSeconds / seconds);
    if (interval >= 1) {
      return {
        interval: interval,
        epoch: name,
      };
    }
  }
};

const timeAgo = (date) => {
  const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
  const { interval, epoch } = getDuration(timeAgoInSeconds);
  const suffix = interval === 1 ? '' : 's';
  return `${interval} ${epoch}${suffix} ago`;
};

function App() {
  // Destructure jobs from the api
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [newJob, setJob] = useState({});
  const [click, setClick] = useState(false);
  const { jobs, error } = useFetchJobs(params, page);

  function loadMore() {
    setPage(page + 1);
  }

  function handleChange(e) {
    setParams({ [e.target.name]: e.target.value });
    setParams((p) => {
      if (e.target.name === 'full_time') return { [e.target.name]: true };
      else return { ...p, [e.target.name]: e.target.value };
    });
    console.log('PARAMS -> ', e.target.name, e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setParams({
      location: e.target.location.value,
      description: e.target.description.value,
    });
  }
  console.log(params);

  return click === false ? (
    <>
      <Header />
      <SearchJob
        params={params}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        click={click}
        setClick={setClick}
      />
      <Container>
        <div>
          {error ? (
            <h1> Error, please refresh the page</h1>
          ) : click === false ? (
            <InfiniteScroll
              dataLength={jobs.length}
              pageStart={page}
              next={loadMore}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <div className='jobsContainer'>
                {jobs.map((job) => {
                  return (
                    <Job
                      key={job.id}
                      job={job}
                      setClick={setClick}
                      setJob={setJob}
                      timeAgo={timeAgo}
                    />
                  );
                })}
              </div>
            </InfiniteScroll>
          ) : (
            <JobDetail job={newJob} timeAgo={timeAgo} setClick={setClick} />
          )}
        </div>
      </Container>
    </>
  ) : (
    <>
      <Header />
      <div>
        <JobDetail
          timeAgo={timeAgo}
          job={newJob}
          click={click}
          setClick={setClick}
        />
      </div>
    </>
  );
}

export default App;
