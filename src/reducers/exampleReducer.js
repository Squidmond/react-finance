import { EXAMPLE_ACTION } from "../actions";

function exampleReducer(state = [], action) {
  switch (action.type) {
    case EXAMPLE_ACTION: {
      state.push(action.change);
      return state;
    }
    default: {
      return state;
    }
  }
}

export default exampleReducer;
