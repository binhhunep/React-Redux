import { createSelector } from "@reduxjs/toolkit";

export const searchSelector = (state) => {
  return state.filters.search;
};
export const todoListSelector = (state) => {
  return state.todoList;
};

export const statusSelector = (state) => {
  return state.filters.status;
};
export const prioritySelector = (state) => {
  return state.filters.priority;
};

export const todosRemainingSelector = createSelector(
  todoListSelector,
  statusSelector,
  searchSelector,
  prioritySelector,
  (todoList, status, search, priority) => {
    return todoList.filter((item) => {
      if (status === "All") {
        return priority.length
          ? item.name.includes(search) && priority.includes(item.priority)
          : item.name.includes(search);
      } else {
        return item.name.includes(search) && priority.length
          ? (status === "Completed" ? item.completed : !item.completed) &&
              priority.includes(item.priority)
          : status === "Completed"
          ? item.completed
          : !item.completed;
      }
    });
  }
);
