import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";
// import addContact from "./addContact";
// import editContact from "./editContact";

const allReducers = combineReducers({ contactsReducer,
    //  addContact, 
    //  editContact 
    });

export default allReducers;
