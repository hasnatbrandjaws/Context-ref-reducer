const Reducer = (state, action) => {
  switch (action.type) {
    case "Inc":
      return { ...state, num: state.num + 1 };

    default:
      return state;
  }
};

export default Reducer;
