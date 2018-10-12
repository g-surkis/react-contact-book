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


export function handleMoveCard(cards, itemDragged, hoverIndex, dropContact ){
  const dragIndex = +cards.findIndex((item, i) => {
    if (
      item.firstName === itemDragged.firstName &&
      item.lastName === itemDragged.lastName
    ) {
      return "{$i}";
    } else {
      return false;
    }
  });
  if (dragIndex === undefined) return;
  if (dragIndex < hoverIndex) {
    let start = cards.slice(0, dragIndex);
    let middle = cards.slice(dragIndex + 1, hoverIndex + 1);
    let finF = cards.length - (hoverIndex + 1);
    let finish = cards.slice(-finF);

    let arr = [];
    if (finF === 0) {
      arr = [...start, ...middle, cards[dragIndex]];
    } else {
      arr = [...start, ...middle, cards[dragIndex], ...finish];
    }

    dropContact(arr);
  } else if (dragIndex === hoverIndex) {
    return;
  } else {
    let start = cards.slice(0, hoverIndex);
    let middle = cards.slice(hoverIndex, dragIndex);
    let finF = cards.length - (dragIndex + 1);

    let finish = cards.slice(-finF);
    let arr = [];
    if (finF === 0) {
      arr = [...start, cards[dragIndex], ...middle];
    } else {
      arr = [...start, cards[dragIndex], ...middle, ...finish];
    }
    
    dropContact(arr);
  }
}
