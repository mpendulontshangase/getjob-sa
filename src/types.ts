export type Job = {
    id: string;
    title: string;
    location: {
      display_name: string;
    };
    category: {
      label: string;
    };
    description: string;
    redirect_url: string;
    company: {
      display_name: string;
    };
    created: string;
    salary_min?: number;
    salary_max?: number;
    contract_type?: string;
    // Add more as needed
  };
  
  export type JobsResponse = {
    results: Job[];
  };
  