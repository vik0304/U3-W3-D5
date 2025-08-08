import { NEW_SEARCH_VALUE } from "../actions/actions";

const initialState = {
  searchInput: "mgk",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_SEARCH_VALUE:
      return {
        ...state,
        searchInput: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
