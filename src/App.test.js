import React from 'react';
import Nav from 'react-bootstrap/Nav'

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


  test('callback fire', ()=>{
    let mockfn = jest.fn();
    let wrapper = shallow(<App />);
    //wrapper.instance().setHome = mockfn;

    wrapper.find('#navlink-1').props().navHome();
    expect(mockfn).toHaveBeenCalled();
  })



  test('should call onselect', () => {
    const onselect = jest.fn()
    const wrapper = shallow(<NavBar onselect={onselect}/>)

    expect(wrapper.find("#nav").at(0).simulate('select',{target:{selectedKey: 1}}))
    //expect(onselect).toHaveBeenCalledWith(0);
  })

  test('renders NavBar DPMA text', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find("#navlink-1").text()).toContain("DPMA")
  });

  test('renders NavBar Admin text', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find("#navlink-2").text()).toContain("Admin")
  });

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

  test('checking node equality', ()=> {
    // GIVEN
    const expectedNode = shallow(
      <div>
        <React.Fragment>                
                  <Nav 
                      id="nav"
                      activeKey="/home"                   
                      >NavBar
                      <Nav.Item>
                          <Nav.Link id="navlink-1" >DPMA</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link id="navlink-2" >Admin</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link >Link</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link >Disabled</Nav.Link>
                      </Nav.Item>
                  </Nav>
              </React.Fragment>
      </div>
    )
    // WHEN
    const actualNode = shallow(<NavBar />)
    // THEN
    expect(actualNode.html()).toEqual(expectedNode.html());
})

})