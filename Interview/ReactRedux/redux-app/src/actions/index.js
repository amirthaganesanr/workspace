import { ADD_ARTICLE, ADD_ITEM } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export function addItem(payload) {
  return { type: ADD_ITEM, payload }
};

export const getData = () => async(dispatch) => {
  const data = await fetch('/mockData/test.json');
  const body = await data.json();
  console.log(body);
  dispatch(addArticle(body.mock));
}