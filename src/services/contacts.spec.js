import validateObj from "./contacts";

describe(">>>C O N T A C T S --- tests for service functions from services/contacts.js)", () => {
  // ?????????????????????????don't

  it("+++ validateObj", () => {
    let obj = {
      firstName: "Naomi",
      lastName: "Shrack",
      phone: 123456789,
      email: "naomi@com.eu",
      birthday: "1234-10-11"
    };
    expect(validateObj(obj)).toBeTruthy();
  });
});
