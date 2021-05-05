import { render, screen } from '@testing-library/react';
import App from './App';

// import { configure, shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';


describe("Test1", () => {

  test('renders learn react link', () => {
  
    const wrapper = shallow(<App />)
    //console.log(wrapper.debug())
    expect(wrapper.find("div").text()).toContain("div App")
  });


})