import React from "react";
import { Layout, Menu } from "antd";
import SidebarWithIcons from "./component/sidebar";
import AntDGridComponent from "./component/layout";
// import 'antd/dist/antd.css';
import "./App.css";
import TopMenu from "./component/header";

const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={80}>
        {/* Sidebar Content */}
        <SidebarWithIcons />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <TopMenu />
        </Header>
        <Content style={{ margin: "16px" }}>
          <AntDGridComponent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
