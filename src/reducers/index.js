import { combineReducers } from "redux";
import contacts from "./contacts";
// import addContact from "./addContact";
// import editContact from "./editContact";

const allReducers = combineReducers({ contacts,
    //  addContact, 
    //  editContact 
    });

export default allReducers;
