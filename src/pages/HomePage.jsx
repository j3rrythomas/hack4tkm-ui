import styled from "styled-components";
import { Layout, Menu, Button } from "antd";
import {
  FundOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";

import { UsersList, Profile, Dashboard, Payment } from ".";
import { setUserId, setUserRole } from "../reducers/dataSlice";

const ProdName = styled.div`
  color: #ffffff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const { Sider, Header, Content } = Layout;
const HomePage = () => {
  const menuItem = useSelector((state) => state.data.menuItem);
  const userRole = useSelector((state) => state.data.userRole);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleMenuItemChange = ({ key }) => {
    history.push(key === "dashboard" ? "" : key);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <ProdName>Electra</ProdName>
        <Menu
          theme="dark"
          selectedKeys={menuItem}
          mode="inline"
          onClick={handleMenuItemChange}
        >
          <Menu.Item key="dashboard" icon={<FundOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="profile" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          {userRole === "ADMIN" ? (
            <Menu.Item key="usersList" icon={<UnorderedListOutlined />}>
              Users List
            </Menu.Item>
          ) : (
            <Menu.Item key="payment" icon={<FundOutlined />}>
              Payment
            </Menu.Item>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#FFFFFF",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Button
            size="large"
            type="primary"
            onClick={() => {
              if (userRole === "USER") {
                dispatch(setUserRole("ADMIN"));
                dispatch(setUserId("61b99d6349907d26c0f5b7ee"));
              } else {
                dispatch(setUserRole("USER"));
                dispatch(setUserId("6202405e8a1c088923f97930"));
              }
            }}
          >
            Switch Role
          </Button>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/usersList" component={UsersList} />
            <Route exact path="/payment" component={Payment} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
