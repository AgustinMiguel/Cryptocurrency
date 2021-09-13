import React from "react";
import "./App.css"
import "antd/dist/antd.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import List from "./components/CurrencyList.tsx";
import Coin from "./components/Coin.tsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;
const titles = [{name: "Home", to:"/"}, {name: "About", to:"/about"}, {name:"List", to:"/list"}];
const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
              {new Array(3).fill(null).map((_, index) => {
                const key = index + 1;
                return <Menu.Item key={key}><Link to={titles[index].to}>{titles[index].name}</Link></Menu.Item>;
              })}
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              {" "}
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/list" exact component={List} />
                <Route path="/list/:id" component={Coin} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center"}}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </React.Fragment>
    </Router>
  );
};

export default App;
