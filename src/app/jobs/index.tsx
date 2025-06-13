import axios from 'axios';

const APP_ID = '127f1814';
const APP_KEY = '2df22b65be554f1033cafc3eec84e6ea';

export async function fetchJobs(page: number = 1) {
    try {
      const response = await axios.get('https://api.adzuna.com/v1/api/jobs/za/search/' + page, {
        headers: {
          Accept: 'application/json',
        },
        params: {
          app_id: APP_ID,
          app_key: APP_KEY,
          results_per_page: 10,
        },
      });
  
      return response.data.results;
    } catch (error: any) {
      console.error('Error fetching jobs:', error.response?.data || error.message);
      return [];
    }
  }
  

