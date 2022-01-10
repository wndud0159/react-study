import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import QuickStart from "./components/QuickStart";
import TestMocking from "./components/TestMocking";

interface repoData {
  name: string;
  description: string;
  subscribers_count: string;
  stargazers_count: string;
  forks_count: string;
}

function App() {
  const { isLoading, error, data } = useQuery<any, Error>("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) => res.json())
  );

  if (isLoading) return <div>loading....</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>
      <strong>✨ {data.stargazers_count}</strong>
      <strong>🍴 {data.forks_count}</strong>
      <QuickStart />
    </div>
  );
}

export default App;
