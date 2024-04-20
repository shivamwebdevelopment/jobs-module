import React, { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = isHome
    ? "http://localhost:8000/jobs?_limit=3"
    : "http://localhost:8000/jobs";
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        setTimeout(() => {
          setJobs(data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log("Error fetching data", error);
        setLoading(false); //Make sure to stop loading even in case of error
      }
    };
    fetchJobs();
  }, []);

  console.log(jobs);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2>{isHome ? "React Jobs" : "Browse Jobs"}</h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;
