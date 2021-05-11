# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




## Json Server

> F:\\json-server\my-banking-json-server>git add .

> F:\\json-server\my-banking-json-server>git commit -am "make it better"
    [master af960b6] make it better
    1 file changed, 1 insertion(+), 1 deletion(-)

> F:\json-server\my-banking-json-server>git push heroku master

## Testing with jest enzyme

* enzyme 
    * you can grab element by tagname, classname 

* TDD
    * First you fail the test then pass it by adding actual code


npm i --save-dev enzyme enzyme-adapter-react-16
npm i enzyme-to-json --save-dev

npm i --save-dev react-test-renderer


// setupTests.js  setup file 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// test file
import { shallow, mount, render } from 'enzyme';

* shallow create inst of compo -> no nested compo rendered
    * const wrapper = shallow(<App />)
    * wrapper.debug --> have all code of compo


example 1:
```````
describe("Test1", () => {
  test('renders learn react link', () => {
    const wrapper = shallow(<App />)
    console.log(wrapper.debug())
  });
})
```````

### code coverage

npm test -- --coverage
npm test -- --coverage --watchAll

 PASS  src/App.test.js (49.278 s)
  Test1
    √ should call onselect (25 ms)
    √ renders NavBar DPMA text (9 ms)
    √ renders NavBar Admin text (2 ms)
    √ renders NavBar (3 ms)
    √ renders NavBar (2 ms)
    √ NavBar with Nav element (59 ms)
    √ renders div app text (7 ms)
    √ HomeComponent have Header (4 ms)
    √ render Header in HomeComponent (4 ms)
    √ render Operations in HomeComponent (1 ms)
    √ checking node equality (22 ms)

-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |   23.68 |        0 |      10 |   23.68 |                   
 src               |      30 |      100 |    6.67 |      30 |                   
  App.js           |      30 |      100 |    6.67 |      30 | 53-56,74-87       
 src/Common        |     100 |      100 |     100 |     100 |                   
  NavBar.js        |     100 |      100 |     100 |     100 |                   
 src/Common/Header |   16.67 |        0 |       0 |   16.67 | 
  Header.js        |   16.67 |        0 |       0 |   16.67 | 9-20
 src/Layout        |    9.09 |      100 |      10 |    9.09 | 
  Home.js          |    9.09 |      100 |      10 |    9.09 | 29-43
-------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        58.067 s, estimated 98 s
Ran all test suites related to changed files.


## To Do

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { Provider } from 'react-redux';
use this



import React from 'react';
import '@deere/ux.uxframe-core/dist/css/uxframe-2019.3.0.min.css';
import { Nav } from '@deere/ux.uxframe-react'
 
const NavBar = (props) => {
    
    return (
        <React.Fragment>
            <Nav.Item className="uxf-nav-item-icon unactive">
                <Nav.Link onClick = {props.navHome}>
                    <span className="uxf-link-text"> DPMA </span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="uxf-nav-item-icon unactive">
                <Nav.Link onClick = {props.navAdmin}>
                    <span className="uxf-link-text"> Admin </span>
                </Nav.Link>
            </Nav.Item>
        </React.Fragment>
    );
}
export default NavBar;



### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.




## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)









