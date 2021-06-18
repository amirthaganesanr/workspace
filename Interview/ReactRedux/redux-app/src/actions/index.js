import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export const getData = () => async(dispatch) => {
  const data = await fetch('/mockData/test.json');
  const body = await data.json();
  console.log(body);
  dispatch(addArticle(body.mock));
}