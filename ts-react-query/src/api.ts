import axios from "axios";

interface Todo {
  id: string;
  title: string;
}

export const getTodos = () => axios.get("/api/todos").then((response) => response.data);

export const postTodos = (todo: Todo) => axios.post("/api/todos", { todo }).then((response) => response.data);
