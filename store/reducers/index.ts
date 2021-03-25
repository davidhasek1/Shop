import { combineReducers } from "redux";
import { handlersReducer } from "./handlersReducer";
export default combineReducers({
  handlers: handlersReducer,
});
