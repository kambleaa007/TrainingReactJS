import { render, screen } from '@testing-library/react';
import App from './App';
import HomeComponent from './Layout/Home';
import { Operations } from './Layout/Home';
import Header from './Common/Header/Header';
import NavBar from './Common/NavBar';

import { configure, shallow, mount } from 'enzyme';
// import { configure, shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });


describe("Test1", () => {

  test('renders NavBar', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find("Nav").text()).toContain("NavBar")
  });

  test('renders NavBar', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find("#nav").text()).toContain("NavBar")
  });

  test('NavBar with Nav element', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find({ activeKey:'/home' }))
  })


  test('renders div app text', () => {  
    const wrapper = shallow(<App />)
    //console.log(wrapper.debug())

    expect(wrapper.find("div").text()).toContain("div App")
  });

  it('HomeComponent have Header', () => {
    const wrapper = shallow(<HomeComponent />)
    
    expect(wrapper.find('Header'))
  })

  test('render Header in HomeComponent', () => {
    const wrapper = shallow(<HomeComponent />)
    const header = (<Header name={"Payments"} isBack={false}/>)

    expect(wrapper.contains(header)).toEqual(true);
  })

  test('render Operations in HomeComponent', () => {
    const wrapper = shallow(<HomeComponent />)
    const operation = (<Operations />)

    expect(wrapper.contains(operation)).toEqual(true);
  })

})