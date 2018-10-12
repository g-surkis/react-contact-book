export const updateStoreAfterAddingContact = contact => {
  return {
    type: "ADD_CONTACT",
    payload: contact
  };
};

export const editContactAction = (contacts) => {
  return {
    type: "EDIT_CONTACT",
    payload: contacts
  };
};
export const dropAction = (contacts) => {
  return {
    type: "DROP_CONTACT",
    payload: contacts
  };
};