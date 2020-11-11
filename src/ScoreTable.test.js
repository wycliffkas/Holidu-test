import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ScoreTable from "./ScoreTable";

configure({ adapter: new Adapter() });

describe("<ScoreTable /> ", () => {

  const props = {
    users: [{ city: "Olofström", country: "SE", created_at: "2019" }],
  };

  const wrapper = shallow(<ScoreTable users={props} />);

  it('sort type should change', () => {   
    const event = {
      preventDefault() {},
      target: { value: 'first_name_asc' }
    };
    
    wrapper.find('select[id="sort"]').simulate('change', event);
    expect(wrapper.find('select[id="sort"]').props().value).toEqual('first_name_asc');
  });

  it('filter should change', () => {   
    const event = {
      preventDefault() {},
      target: { value: 'first_name' }
    };
    
    wrapper.find('select[id="filter"]').simulate('change', event);
    expect(wrapper.find('select[id="filter"]').props().value).toEqual('first_name');
  });

});
