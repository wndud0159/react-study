import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodos, postTodos } from "../api";

interface Todo {
  id: string;
  title: string;
}

const QuickStart: React.VFC = () => {
  // const queryClient = useQueryClient();

  const query = useQuery<Todo[], Error>("/todos", getTodos);
  console.log(`query: `, query);

  const mutation = useMutation(postTodos, {
    // onSuccess: () => {
    //   queryClient.invalidateQueries("/todos");
    // },
  });

  if (query.isLoading) {
    return <div>loading....</div>;
  }

  if (query.error) {
    return <div> Error...</div>;
  }

  return (
    <div>
      {query.isFetching ? <div className=" border border-red-500">Refresh</div> : null}
      {query.data?.map((todo) => (
        <li key={todo.id}>
          id: {todo.id} / title: {todo.title}
        </li>
      ))}
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now().toString(),
            title: "Juyoung",
          });
        }}
      >
        Add Button
      </button>
    </div>
  );
};

export default QuickStart;
