import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import listItems from "./listItems";

configure({ adapter: new Adapter() });

describe("<ListItem /> ", () => {
  it("listItem should render correctly", () => {
    const container = shallow(<listItem />);
    expect(container).toMatchSnapshot();
  });
});