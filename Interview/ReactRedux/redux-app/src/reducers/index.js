import { combineReducers } from "redux";

import appReducer from "./app-reducer";
import contentReducer from "./content-reducer";

export default combineReducers({ app: appReducer, content: contentReducer });