import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function Pagenation() {
  const [page, setPage] = React.useState(0);

  const fetchProjects = (page = 0) => axios.get("/api/projects?page=" + page).then((res) => res.data);

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(["projects", page], () => fetchProjects(page), {
    // 새로운 요청이 올때까지 예전 데이터를 가지고 있다가 바꾸겠다는 옵션
    keepPreviousData: true,
  });

  // console.log(data);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          {data.projects.map((project: any) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0}>
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          if (!isPreviousData && data.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
}
