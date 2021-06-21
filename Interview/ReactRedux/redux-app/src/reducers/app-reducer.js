import { ADD_ARTICLE, ADD_ITEM } from "../constants/action-types";

const initialState = {
  articles: [],
  items: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE: {
      const payload = action.payload;
      return {
        ...state,
        articles: [...state.articles, payload],
      }
    }
    case ADD_ITEM: {
      const payload = action.payload;
      return {
        ...state,
        items: [...state.items, payload],
      }
    }
    default:
      return state;
  }
};

export default appReducer;