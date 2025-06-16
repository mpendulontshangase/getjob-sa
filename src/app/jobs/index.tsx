import axios from 'axios';
import type { Job, JobsResponse } from '@/types';


const APP_ID = '127f1814';
const APP_KEY = '2df22b65be554f1033cafc3eec84e6ea';

export async function fetchJobs(page: number = 1, searchByKeyWord: string = '', location: string = ''): Promise<Job[]> {
  try {
    const response = await axios.get<JobsResponse>(
      'https://api.adzuna.com/v1/api/jobs/za/search/' + page,
      {
        headers: {
          Accept: 'application/json',
        },
        params: {
          app_id: APP_ID,
          app_key: APP_KEY,
          results_per_page: 10,
          what: searchByKeyWord,
          where: location,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Error fetching jobs:', error.response?.data || error.message);
    } else {
      console.log('Unexpected error:', error);
    }
    return [];
  }
}
