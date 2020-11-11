import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './App';
import Dashboard from './Dashboard'
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("<App /> ", () => {
  const wrapper = shallow(<App />);
  it("App has Dashbaord component", () => {
    expect(wrapper.find(Dashboard)).toHaveLength(1);
  });
});
