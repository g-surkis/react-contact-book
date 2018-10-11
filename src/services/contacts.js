export function addContactToLocStorage(obj) {
  const contactList = JSON.parse(localStorage.getItem("Contacts"));
  contactList.push(obj);
  localStorage.setItem("Contacts", JSON.stringify(contactList));
}

export function validateObj(obj) {
  for (let value in obj) {
    if (!obj[value]) {
      return false;
    }
  }
  return true;
}

export function updateContactsInLocStorage(contacts) {
  localStorage.removeItem("Contacts");
  localStorage.setItem("Contacts", JSON.stringify(contacts));
}
