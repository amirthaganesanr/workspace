import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE: {
      const payload = action.payload;
      const updatedArticles = [...state.articles, payload];
      return {
        ...initialState,
        articles: updatedArticles,
      }
    }
    default: {
      return initialState;
    }
  }
};

export default appReducer;