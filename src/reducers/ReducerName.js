const ReducerName = (state, action) => {
  switch (action.type) {
    case "add":
        return {...state, name: action.payload}
    default:
      return state;
  }
};

export default ReducerName;
