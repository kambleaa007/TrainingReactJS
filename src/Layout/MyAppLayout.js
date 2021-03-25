import React, { useEffect, useState }from 'react';
import { BrowserRouter, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';


import { Layout, Menu, Breadcrumb, Switch as Switch1 } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';

import "./MyAppLayout.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

var siderLayoutArray = [
    "option1", "option2", "user", "team", "files"
]

var siderJson = {
    option1: "Option 1", option2: "Option 2"
}

function MyAppLayout(){

    const history = useHistory();
    let { path, url } = useRouteMatch();

    const[collapsed, setCollapsed] = useState(false);
    var onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };
    const[theme, setTheme] = useState('dark');
    var changeTheme = value => {
        value ? setTheme('dark') : setTheme('light');
  };

    return(
        <Layout style={{ minHeight: '100vh' }} >
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className={theme==='dark'? "ant-layout-sider-dark": "ant-layout-sider-light"}>
                <div className="logo" />
                <Switch1  checked = { theme === "dark" } onChange = {changeTheme} checkedChildren= "Dark" unCheckedChildren= "Light"  />
                <br />
                <br />
                <Menu theme = {theme} defaultSelectedKeys={['1']} mode="inline">
                    
                    <Menu.Item key="1" icon={<DesktopOutlined />} onClick={()=>{history.push(`${url}/option1`)}}>                  
                    {/* <Menu.Item key="1" icon={<PieChartOutlined />} onClick={()=>{history.push(`${url}/`+siderLayoutArray[0])}}>  */}
                    {/* {siderJson[siderLayoutArray[0]]} */}
                    Option 1
                    </Menu.Item>
                    {/* <Menu.Item key="2" icon={<DesktopOutlined />} onClick={()=>{history.push(`${url}/option2`)}}> */}
                    <Menu.Item key="2" icon={<DesktopOutlined />} onClick={()=>{history.push(`${url}/`+siderLayoutArray[1])}}>
                    Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined /> } title="User" >
                    <Menu.Item key="3" onClick={()=>{history.push(`${url}/user/tom`)}}>Tom</Menu.Item>
                    <Menu.Item key="4" onClick={()=>{history.push(`${url}/user/bill`)}}>Bill</Menu.Item>
                    <Menu.Item key="5" onClick={()=>{history.push(`${url}/user/alex`)}}>Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                    Files
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item href="/">
                        <HomeOutlined /> 
                    </Breadcrumb.Item>
                    
                    <Breadcrumb.Item><a href="/myAppLayout">MyAppLayout</a></Breadcrumb.Item> 
                    <Breadcrumb.Item><a href="/myAppLayout/user">User</a></Breadcrumb.Item> 
                    <Breadcrumb.Item><a href="/myAppLayout/user/bill">Bill</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/myAppLayout/option1">Option1</a></Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                    <Route exact path={path}>
                    </Route>
                    <Route path={`${path}/option1`}>
                        <div>
                        Option1    {console.log(history.location.pathname)}
                        </div>
                    </Route>
                    <Route path={`${path}/option2`}>
                        <div>
                        Option2      {console.log(history.location.pathname)}
                        </div>
                    </Route>
                    <Route path={`${path}/user`}>
                        <div>
                            <h3>Option3 Users</h3>
                            <Switch>
                                <Route exact path={path}>
                                </Route>
                                <Route path={`${path}/user/tom`}>
                                    <div>
                                        Hello Tom
                                    </div>
                                </Route>
                                <Route path={`${path}/user/bill`}>
                                    <div>
                                        Hello Bill
                                    </div>
                                </Route>
                                <Route path={`${path}/user/alex`}>
                                    <div>
                                        Hello Alex
                                    </div>
                                </Route>
                            </Switch>
                        </div>
                    </Route>
                </Switch>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design Layout Footer</Footer>
            </Layout>
        </Layout>
    )
}


export default MyAppLayout;