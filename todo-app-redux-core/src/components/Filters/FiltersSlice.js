const initState = {
  search: "",
  status: [],
  priority: [],
};

const FiltersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/search":
      return {
        ...state,
        search: action.payload,
      };

    case "filters/status":
      return {
        ...state,
        status: action.payload,
      };

    case "filters/priority":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};
export { FiltersReducer };
