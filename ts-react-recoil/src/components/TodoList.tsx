import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { filteredTodoListState, todoListFilterState, todoListState, todoListStatsState } from "../store/todoListState";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter} name="" id="">
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show UnCompleted">UnCompleted</option>
      </select>
    </div>
  );
}

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUnCompletedNum, percentCompleted } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUnCompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
}

const TodoList: React.VFC = () => {
  const todoLists = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoLists.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
