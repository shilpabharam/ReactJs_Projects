import React, { useEffect, useState } from "react";

const PAGE_SIZE = 6;

export default function JobBoardListLoad() {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then((res) => res.json())
      .then(setJobIds);
  }, []);

  useEffect(() => {
    if (jobIds.length === 0) return;

    const fetchJobs = async () => {
      setLoading(true);

      const start = page * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      const idsToFetch = jobIds.slice(start, end);

      const jobRequests = idsToFetch.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (res) => res.json()
        )
      );

      const newJobs = await Promise.all(jobRequests);
      setJobs((prev) => [...prev, ...newJobs]);
      setLoading(false);
    };

    fetchJobs();
  }, [page, jobIds]);

  const hasMore = jobs.length < jobIds.length;

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Hacker News Job Board</h2>

      {jobs.map((job) => (
        <div
          key={job.id}
          style={{ padding: "12px 0", borderBottom: "1px solid #ddd" }}
        >
          <h4>
            {job.url ? (
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                {job.title}
              </a>
            ) : (
              job.title
            )}
          </h4>

          <small>
            Posted on {new Date(job.time * 1000).toLocaleDateString()}
          </small>
        </div>
      ))}

      {hasMore && (
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={loading}
          style={{ marginTop: 20 }}
        >
          {loading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}
