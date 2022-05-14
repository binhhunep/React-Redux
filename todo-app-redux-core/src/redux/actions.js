const addTodo = (data) => {
  return { type: "todoList/addTodo", payload: data };
};

const searchAction = (search) => {
  return { type: "filters/search", payload: search };
};

const changeStatusAction = (status) => {
  return { type: "filters/status", payload: status };
};

const changePriorityAction = (priority) => {
  return { type: "filters/priority", payload: priority };
};

const toggleTodoStatus = (todoId) => {
  return {
    type: "filters/toggleTodoStatus",
    payload: todoId,
  };
};

export {
  addTodo,
  searchAction,
  changeStatusAction,
  changePriorityAction,
  toggleTodoStatus,
};
