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

    //wrapper.find('#navlink-1').props().navHome();
    //expect(mockfn).toHaveBeenCalled();
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





// File 2



//import { act } from '@testing-library/react';

import App from './App';
import React, { useState, useEffect, useContext } from 'react';

import { configure, shallow, mount, render } from 'enzyme';
import NavBar from './Component/NavBar';
import HeaderDropdown  from './Component/HeaderDropdown';
import LanguageTranslator from './Component/LanguageTranslator';
import CriteriaRow from './Component/CriteriaRow';
import CriterialTable from './Component/CriterialTable';
import { MyDropdown } from './Component/HeaderDropdown';

import axios from 'axios';
import toJson from 'enzyme-to-json';
import { act } from "react-dom/test-utils";

import Dropdown from 'react-bootstrap/Dropdown'

describe(' Enzyme Componenet ', () => {
 
  // it('renders <App/>', () => {
  //     const wrapper = shallow(<App />);
  //     expect(wrapper.find('div')).toHaveLength(1);
  // });

  // it('renders <App/>', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('header')).toHaveLength(1);
  // });

  // it('snapshot App', ()=>{
  //   const tree = shallow(<App />);
  //   expect(toJson(tree)).toMatchSnapshot();
  // })

  // it('renders <NavBar/>', () => {
  //   const wrapper = shallow(<NavBar />);
  //   expect(wrapper.find('Nav')).toHaveLength(1);
  // });

    // it('snapshot NavBar', ()=>{
  //   const tree = shallow(<NavBar />);
  //   expect(toJson(tree)).toMatchSnapshot();
  // })

  // it('renders <HeaderDropdown/>', () => {
  //   const wrapper = shallow(<HeaderDropdown />);
  //   expect(wrapper.find('Dropdown')).toHaveLength(2);
  // });

  // it('renders <HeaderDropdown/>', () => {
  //   const wrapper = shallow(<HeaderDropdown />);
  //   expect(wrapper.find('div')).toHaveLength(2);
  // });

  // it('renders <HeaderDropdown/>', () => {
  //   const wrapper = shallow(<HeaderDropdown />);
  //   expect(wrapper.find('DropdownToggle')).toHaveLength(2);
  // });

  // it('renders <LanguageTranslator/>', () => {
  //   const wrapper = shallow(<LanguageTranslator />);
  //   //console.log(wrapper.debug())
  //   expect(wrapper.find('ContextProvider')).toHaveLength(1);
  // });

  // it('renders <CriteriaRow/>', () => {
  //   const wrapper = shallow(<CriteriaRow />);
  //   //console.log(wrapper.debug())
  //   expect(wrapper.find('Col')).toHaveLength(5);
  // });

  // it('renders <CriteriaRow/>', () => {
  //   const wrapper = shallow(<CriteriaRow />);
  //   expect(wrapper.find('div')).toHaveLength(1);
  // });

  // it('renders <CriteriaRow/>', () => {
  //   const wrapper = shallow(<CriteriaRow />);
  //   expect(wrapper.find('FormRow')).toHaveLength(1);
  // });

  // it('renders <CriteriaRow/>', () => {
  //   const wrapper = shallow(<CriteriaRow />);
  //   expect(wrapper.find('FormControl')).toHaveLength(3);
  // });

  // it('renders <CriteriaRow/>', () => {
  //   const wrapper = shallow(<CriteriaRow />);
  //   expect(wrapper.find('option')).toHaveLength(9);
  // });

  // it('renders <CriteriaRow/>', () => {
  //   const wrapper = shallow(<CriteriaRow />);
  //   expect(wrapper.find('img')).toHaveLength(2);
  // });

  // it('renders <CriteriaRow/>', () => {
  //   const wrapper = shallow(<CriteriaRow />);
  //   const cc = wrapper.find('#onSelectingOperator');
  //   //console.log(cc.debug())
  //   cc.simulate('change')
  // });

  // it('renders <CriteriaRow/>', () => {
  //   const wrapper = shallow(<CriteriaRow />);
  //   const cc = wrapper.find('#selectField');
  //   //console.log(cc.debug())
  //   cc.simulate('change')
  // });

  // it('renders <CriteriaRow/>', () => {
  //   const wrapper = shallow(<CriteriaRow />);
  //   const cc = wrapper.find('#onSelectingValue');
  //   //console.log(cc.debug())
  //   cc.simulate('change')
  // });

  // it('snapshot CriteriaRow', ()=>{
  //   const tree = shallow(<CriteriaRow />);
  //   expect(toJson(tree)).toMatchSnapshot();
  // })

  // it('renders <MyDropdown/>', () => {
  //   const wrapper = shallow(<MyDropdown />);
  //   expect(wrapper.find('DropdownItem')).toHaveLength(1);
  // }); 

  // it('renders <HeaderDropdown/>', async () => {

  //   let wrapper;
  //   await act(async ()=> {
  //     wrapper = mount(<HeaderDropdown />)
  //   })
  //   wrapper.update();
  //   expect(toJson(wrapper)).toMatchSnapshot();
    
  // });

  // it('renders <HeaderDropdown/>', () => {
  //   const wrapper = shallow(<HeaderDropdown />);

  //   expect(wrapper.find('DropdownItem')).toHaveLength(3);
  //   //console.log(wrapper.debug())
  // });

  // it('renders <HeaderDropdown/>', () => {
  //   const wrapper = shallow(<HeaderDropdown />);

  //   expect(wrapper.find('DropdownMenu')).toHaveLength(2);
  // });

  // it('renders <HeaderDropdown/>', () => {
  //   const wrapper = mount(<HeaderDropdown />);
  //   const setLanguageList = jest.fn()
  //     jest
  //       .spyOn(React, 'useState')
  //       .mockImplementation(languageList => [languageList=[], setLanguageList])
  //   //expect(wrapper.find('DropdownMenu').at(1).children().find('DropdownItem')).toHaveLength(3);
  // });

  // it('renders <HeaderDropdown/>', () => {
  //   const wrapper = shallow(<HeaderDropdown />);
  //   expect(wrapper.find('DropdownMenu').children()).toHaveLength(4);
  // });

  // it('renders <HeaderDropdown/>', () => {
  //   const wrapper = mount(<HeaderDropdown />);
  //   expect(wrapper.find('Dropdown')).toHaveLength(1);
  // });

  // it('snapshot HeaderDropdown', ()=>{
  //   const tree = shallow(<HeaderDropdown />);
  //   expect(toJson(tree)).toMatchSnapshot();
  // })

  // it('axios erroor mocks', async() => {
  //   const errorMessage = 'Network Error';
 
  //   axios.get.mockImplementationOnce(() =>
  //     Promise.reject(new Error(errorMessage)),
  //   );

  // })

  // it('fetch resolves ', () => {
  //   const data = [
  //     {
  //       "userId": 1,
  //       "id": 1,
  //       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //       "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  //     }
  //   ]

  //   axios.get = jest.fn()
  //   jest.mock('Axios');

  //   axios.get.mockImplementationOnce(() => Promise.resolve(data));
  //   expect(axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5', { withCredentials: true})).resolves.toEqual(data);

  // })

  // it('fetches error data from an API', async () => {
  //   const errorMessage = 'Network Error';
 
  //   axios.get.mockImplementationOnce(() =>
  //     Promise.reject(new Error(errorMessage)),
  //   );
 
  //   expect(axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5', { withCredentials: true})).rejects.toThrow(errorMessage);
  // })


  it('axios mock', async () => {
    let wrapper;
    
    axios.get = jest.fn()
    jest.mock('Axios');

    const data = {
      data: [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      ]
    
    }
      
    await act(async ()=> {
        await axios.get.mockImplementationOnce(()=> Promise.resolve(data))
        wrapper = mount(<HeaderDropdown />)
      })
    
    await expect(axios.get).toHaveBeenCalledTimes(1);
    wrapper.update();
    await expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts?_limit=5', { withCredentials: true})
    await expect(wrapper.find("DropdownMenu").at(1).find("DropdownItem")).toHaveLength(0)
    expect(toJson(wrapper)).toMatchSnapshot();
  
  })

 


  // it('mock code setLanguageList', async () => {

  //   const setLanguageList = ()=>{
  //     return Promise.resolve({title:'title'})
  //   }
  //   const pizza = {
  //     name: n => `pizza name: ${n}`,
  //   }

  //   const spy = jest.spyOn(pizza, 'name');
    
  //   // way 1
  //   // expect(pizza.name('cheese')).toBe('pizza name: cheese')
  //   // expect(spy).toHaveBeenCalledWith('cheese')

  //   // way 2
  //   // spy.mockImplementation(n=> 'pizzaname')
  //   // expect(pizza.name('cheese')).toBe('pizzaname')

  // })

  // it('mock async code ', async () => {

  //   // way 3
  //   const user = {
  //     getName: jest.fn(()=> Promise.resolve('Karl H'))
  //   };
  //   await expect(user.getName('Karl H')).resolves.toBe('Karl H');
  // })


  // it('mock async code ', async () => {

  //   //React.useEffect = jest.fn()//jest.spyOn(React, "useEffect").mockImplementation(f => f())
    
  //   //const setLanguageList = jest.fn().mockResolvedValue({data:"data"})
  //   let wrapper = mount(<HeaderDropdown />)

  // })

})





import React, { useState, useEffect, useContext } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

export default function HeaderDropdown  (props) {
 
    const [userInfo, setUserInfo] = useState([]);
    const [languageList, setLanguageList] = useState([]);
    const [preferredLanguage, setPreferredLanguage] = useState();
 
    useEffect( async () => {
        const getUserInfo = async () => {
            const languageResult = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5', { withCredentials: true});
            const languageData = await languageResult.data;

            console.log("/////////languageResult"+languageResult.data)
            // console.log("/////////languageData"+languageData.length)
    
            if(languageData) {
                setLanguageList(languageData.map(p=>p.title));                
            }
        }

        getUserInfo();
        //console.log("/////////languageList"+languageList)
    }, []);

    return (
        <div>
            languageList is {languageList.length}
            <Dropdown>
                <Dropdown.Toggle variant="link" size="sm">
                    "dictionary  dictionary hello", <span className="uxf-header-title-username">"userInfo name"</span>{' '}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div>
                        <Dropdown className = "language-dropdown">
                            <Dropdown.Toggle  variant="link" id="dropdown-basic">
                                "dictionary.language"
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="language-dropdown-menu">  
                             {
                                languageList ? 
                                languageList.map( lang => {
                                    return(                                        
                                        <Dropdown.Item key = {Math.random()}
                                        value= "lang.id">
                                            language is : {lang}
                                        </Dropdown.Item>
                                    )
                                })
                                : 
                                <div>LOADING</div>
                             }                        
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Dropdown.Item>  dictionary helpandTraining</Dropdown.Item>
                    <Dropdown.Item>  dictionary feedback</Dropdown.Item>
                    <Dropdown.Item>  dictionary signOut</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
//export default connect(null, mapDispatchToProps)(HeaderDropdown);
