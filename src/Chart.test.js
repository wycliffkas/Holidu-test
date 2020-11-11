import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Chart from "./Chart";

configure({ adapter: new Adapter() });

describe("<Chart /> ", () => {
  it("chart should render correctly", () => {
    const container = shallow(<Chart />);
    expect(container).toMatchSnapshot();
  });
});
