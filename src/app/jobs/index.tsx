import axios from "axios";
import type { Job, JobsResponse } from "@/types";

const APP_ID = "127f1814";
const APP_KEY = "2df22b65be554f1033cafc3eec84e6ea";

export async function fetchJobs(
  page: number = 1,
  searchByKeyWord: string = "",
  location: string = "",
  contract_type: string = "",
  salaryRange: string = ""
): Promise<Job[]> {
  try {
    let salaryMin: number | undefined = undefined;
    let salaryMax: number | undefined = undefined;

    if (salaryRange) {
      const [min, max] = salaryRange.split("-");
      salaryMin = Number(min);
      if (max?.includes("+")) {
        salaryMax = undefined;
      } else {
        salaryMax = Number(max);
      }
    }

    const response = await axios.get<JobsResponse>(
      "https://api.adzuna.com/v1/api/jobs/za/search/" + page,
      {
        headers: {
          Accept: "application/json",
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

    let jobs = response.data.results;

    // ✅ Frontend filter by contract_type and salary range
    jobs = jobs.filter((job) => {
      const matchesContractType =
        contract_type === "" ||
        job.contract_type?.toLowerCase() === contract_type.toLowerCase();

      const monthlySalary = job.salary_max ? job.salary_max / 12 : 0;

      const matchesSalary =
        (!salaryMin || monthlySalary >= salaryMin) &&
        (!salaryMax || monthlySalary <= salaryMax);

      return matchesContractType && matchesSalary;
    });

    return jobs;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        "Error fetching jobs:",
        error.response?.data || error.message
      );
    } else {
      console.log("Unexpected error:", error);
    }
    return [];
  }
}
