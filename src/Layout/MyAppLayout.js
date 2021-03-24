import React, { useEffect, useState }from 'react';
import { BrowserRouter, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';


import { Layout, Menu, Breadcrumb, Switch as Switch1 } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import "./MyAppLayout.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



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
            <Switch1
                checked = { theme === "dark" }
                onChange = {changeTheme}
                checkedChildren= "Dark"
                unCheckedChildren= "Light"
                />
            <br />
            <br />
            <Menu theme = {theme} defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />} onClick={()=>{history.push(`${url}/option1`)}}>
                Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />} onClick={()=>{history.push(`${url}/option2`)}}>
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
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                    <Route exact path={path}>
                    </Route>
                    <Route path={`${path}/option1`}>
                        <div>
                        Option1      
                        </div>
                    </Route>
                    <Route path={`${path}/option2`}>
                        <div>
                        Option2      
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