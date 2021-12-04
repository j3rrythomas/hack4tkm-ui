import { Layout, Menu } from "antd";
import {
  FundOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";

import { setUserRole } from "./reducers/dataSlice";

const ProdName = styled.div`
  color: #ffffff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const { Sider, Header, Content } = Layout;
const App = () => {
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.data.userRole);
  useEffect(() => {
    const getRole = async () => {
      await axios
        .get(
          "https://electrothon-backend.herokuapp.com/61ab5a6f69213da578f530c9"
        )
        .then((response) => {
          dispatch(setUserRole(response.data.role));
        });
    };
    getRole();
  }, [dispatch, userRole]);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider>
        <ProdName>Electra</ProdName>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<FundOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Profiles
          </Menu.Item>
          {userRole === "ADMIN" ? (
            <Menu.Item key="3" icon={<UnorderedListOutlined />}>
              {console.log("H")}
              Users
            </Menu.Item>
          ) : (
            <></>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#FFFFFF" }}>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};

export default App;
