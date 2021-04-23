import { combineReducers } from "redux";
import { handlersReducer } from "./handlersReducer";
import { userCartReducer } from "./userCartReducer";
export default combineReducers({
  handlers: handlersReducer,
  userCart: userCartReducer
});
