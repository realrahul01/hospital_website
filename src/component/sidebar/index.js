import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  SettingOutlined,
  BarChartOutlined,
  EyeOutlined,
  SearchOutlined,
  AppstoreOutlined,
  UserOutlined,
  TeamOutlined,
  HeartOutlined,
  InboxOutlined,
  FileSearchOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;

const SidebarWithIcons = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={80} theme="dark">
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />} />
          <Menu.Item key="2" icon={<FileTextOutlined />} />
          <Menu.Item key="3" icon={<SettingOutlined />} />
          <Menu.Item key="4" icon={<BarChartOutlined />} />
          <Menu.Item key="5" icon={<EyeOutlined />} />
          <Menu.Item key="6" icon={<SearchOutlined />} />
          <Menu.Item key="7" icon={<AppstoreOutlined />} />
          <Menu.Item key="8" icon={<UserOutlined />} />
          <Menu.Item key="9" icon={<TeamOutlined />} />
          <Menu.Item key="10" icon={<HeartOutlined />} />
        </Menu>
      </Sider>
    </Layout>
  );
};

export default SidebarWithIcons;
