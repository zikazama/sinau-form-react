const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
    console.log(action)
      return [...state, action.todo];
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todoReducer;
