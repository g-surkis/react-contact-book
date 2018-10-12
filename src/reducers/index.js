import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";

const allReducers = combineReducers({ contactsReducer});

export default allReducers;
