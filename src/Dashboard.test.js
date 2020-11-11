import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Dashboard from "./Dashboard";
import { MainListItems, SecondaryListItems } from "./listItems";
import Chart from "./Chart";
import ScoreTable from "./ScoreTable";

configure({ adapter: new Adapter() });

describe("<Dashboard /> ", () => {
  const wrapper = shallow(<Dashboard />);

  it("Dashboard should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Dashboard has MainListItems component", () => {
    expect(wrapper.find(MainListItems)).toHaveLength(1);
  });

  it("Dashboard has SecondaryListItems component", () => {
    expect(wrapper.find(SecondaryListItems)).toHaveLength(1);
  });

  it("Dashboard has Chart component", () => {
    expect(wrapper.find(Chart)).toHaveLength(1);
  });

  it("Dashboard has ScoreTable component", () => {
    expect(wrapper.find(ScoreTable)).toHaveLength(1);
  });
});
