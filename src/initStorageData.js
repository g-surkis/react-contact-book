export function initStorageData() {
  localStorage.removeItem("Contacts");
  const arr = [
    {
      firstName: "Irek",
      lastName: "Bassa",
      phone: "38096526643",
      email: "irek@gmail.com",
      birthday: "2018-10-10"
    },
    {
      firstName: "Ilon",
      lastName: "Mask",
      phone: "38652546543",
      email: "mask@gmail.com",
      birthday: "2018-10-10"
    },
    {
      firstName: "Richard",
      lastName: "Branson",
      phone: "38652546543",
      email: "richard@gmail.com",
      birthday: "2018-10-10"
    },
    {
      firstName: "Bill",
      lastName: "Gates",
      phone: "38652546543",
      email: "bill@gmail.com",
      birthday: "2018-10-10"
    },
    {
      firstName: "Dan",
      lastName: "Abramov",
      phone: "38652546543",
      email: "dan@gmail.com",
      birthday: "2018-10-10"
    },
    {
      firstName: "Linux",
      lastName: "Torvalds",
      phone: "38652546543",
      email: "linux@gmail.com",
      birthday: "2018-10-10"
    },
    {
      firstName: "Mark",
      lastName: "Zuckerbeg",
      phone: "38652546543",
      email: "linux@gmail.com",
      birthday: "2018-10-10"
    }
  ];
  localStorage.setItem("Contacts", JSON.stringify(arr));
  const fromStorage = JSON.parse(localStorage.getItem("Contacts"));
  console.log(fromStorage);
}
