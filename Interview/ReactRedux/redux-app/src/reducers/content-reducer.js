import { ADD_CONTENT } from "../constants/action-types";

const initialState = {
  content: []
};

function contentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTENT: {
      const payload = action.payload;
      const updatedContent = [...state.content, payload];
      return {
        ...initialState,
        articles: updatedContent,
      }
    }
    default: {
      return initialState;
    }
  }
};

export default contentReducer;