import { useReducer, useEffect } from 'react';
import axios from 'axios';

// Action Types
const ACTIONS = {
  REQUEST: 'REQUEST',
  GET_DATA: 'GET_DATA',
  ERROR: 'ERROR',
  HAS_NEXT_PAGE: 'HAS_NEXT_PAGE',
};

// Api Url
const jobsUrl = 'https://jobs.github.com/positions.json';

// Reducer with switch case

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.REQUEST:
      return { jobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      return {
        ...state,
        error: action.payload.error,
        jobs: [], // If error, throw error message and reset job to empty array
      };
    case ACTIONS.HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage };
    default:
      return state;
  }
}

// React Hook
export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { jobs: [] });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source(); // Create cancel Token
    dispatch({ type: ACTIONS.REQUEST });
    axios
      .get(jobsUrl, {
        cancelToken: cancelToken.token, // Get individual Token
        params: { markdown: true, page: page, ...params },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((error) => {
        // If cancelled, then just return instead of passing error
        if (axios.isCancel(error)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: error } });
      });
    const cancelToken2 = axios.CancelToken.source();
    axios
      .get(jobsUrl, {
        cancelToken: cancelToken2.token, // Get individual Token
        params: { markdown: true, page: page + 1, ...params },
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.HAS_NEXT_PAGE,
          payload: { hasNextPage: res.data },
        });
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: error } });
      });

    return () => {
      // Runs the cancel token everytime params change
      cancelToken.cancel();
      cancelToken2.cancel();
    };
  }, [params, page]); // <-- If parameter or pages change it will run useEffect again

  return state;
}
