
const initialState = JSON.parse(localStorage.getItem("Contacts"));

const contactsReducer = (state = initialState, action) => {
  if (action.type === "EDIT_CONTACT") {
    
    let arr = [...action.payload];
    return arr;
  }
  if (action.type === "ADD_CONTACT") {
    let contacts = state;
    let arr = [...contacts, action.payload];
    return arr;
  }
  if (action.type === "DROP_CONTACT") {
    let arr = [...action.payload];
    return arr;
  }
  return state;
};

export default contactsReducer;
