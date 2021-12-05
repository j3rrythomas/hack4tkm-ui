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
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";

import { setUserRole } from "./reducers/dataSlice";
import { UsersList, Profile, Dashboard } from "./pages";

const ProdName = styled.div`
  color: #ffffff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const { Sider, Header, Content } = Layout;
const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.data.userRole);
  const menuItem = useSelector((state) => state.data.menuItem);

  useEffect(() => {
    const getRole = async () => {
      await axios
        .get(
          "https://electrothon-backend.herokuapp.com/61ab84cab5c4a84d673da561"
        )
        .then((response) => {
          dispatch(setUserRole(response.data.role));
        })
        .catch((error) => console.error(error));
    };
    getRole();
  }, [dispatch, userRole]);
  const handleMenuItemChange = ({ key }) => {
    history.push(key === "dashboard" ? "" : key);
  };
  return (
    <Layout style={{ height: "100vh", maxHeight: "100vh" }}>
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
            <></>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#FFFFFF" }}>Header</Header>
        <Content>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/usersList" component={UsersList} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
