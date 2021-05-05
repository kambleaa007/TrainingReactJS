import { render, screen } from '@testing-library/react';
import App from './App';
import HomeComponent from './Layout/Home';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("Test1", () => {

  test('renders div app text', () => {
  
    const wrapper = shallow(<App />)
    //console.log(wrapper.debug())
    expect(wrapper.find("div").text()).toContain("div App")
  });

  test('render li text', () => {
    const wrapper = shallow(<HomeComponent />)
    expect(wrapper.find("li").text()).toContain("Send Money or pay a bill")
  })

})