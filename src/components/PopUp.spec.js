import React from "react";
import { shallow } from "enzyme";
import CreateEditContact from "./CreateEditContact";

import PopUp from "./PopUp";

describe("PopUp component", () => {
  const mockFetchGetCLose = jest.fn();
  const props = {
    contact: {},
    contactKey: 0,
    label: "",
    close: mockFetchGetCLose
  };
  let popUp = shallow(<PopUp {...props} />);

  
  it("renders properly", () => {
    expect(popUp).toMatchSnapshot();
  });
});
