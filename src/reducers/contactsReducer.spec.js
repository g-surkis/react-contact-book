import contactsReducer from "./contactsReducer";

const initialState =  [{'first': 1}];


describe("contacts reducer test", () => {
  // ?????????????????????????don't

  it("EDIT_CONTACT", () => {
    const action = {
      type: "EDIT_CONTACT",
      payload: {'second': 2}
    };
    expect(contactsReducer(initialState, action)).toEqual([{'second': 2}]);
  });
  it("ADD_CONTACT", () => {
    const action = {
      type: "ADD_CONTACT",
      payload: {'second': 2}
    };
    expect(contactsReducer(initialState, action)).toEqual(
        [{'first': 1},{'second': 2}]
    );
  });
  // ?????????????????????????don't
  it("DROP_CONTACT", () => {
    const action = {
      type: "DROP_CONTACT",
      payload: {'second': 2}
    };
    expect(contactsReducer(initialState, action)).toEqual([{'second': 2}]);
  });
});

