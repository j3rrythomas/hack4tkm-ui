import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Card, Col, List, Button, Tag } from "antd";
import { BulbOutlined } from "@ant-design/icons";
import {
  BarChart,
  LineChart,
  PieChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
  Pie,
} from "recharts";

import { setMenuItem, setReqServiceVisible } from "../reducers/dataSlice";
import { RequestServiceModal } from "../components";

const DashboardContainer = styled.div`
  height: 100%;
  margin: 0 2%;
`;
const UserDashboard = styled.div`
  font-size: 1.25rem;
  .ant-col {
    margin: 1%;
  }
  .ant-card-body {
    font-size: 1.5rem;
  }
`;
const AdminDashboard = styled.div`
  font-size: 1.25rem;
  .ant-col {
    margin: 1%;
  }
  .ant-card-body {
    font-size: 1.5rem;
  }
`;
const GraphsRow = styled(Row)`
  .ant-col {
    background: #ffffff;
    padding: 2%;
    border-radius: 10px;
  }
`;

const notifications = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
const servOrCompls = [
  { details: "Racing car sprays burning fuel into crowd.", type: "SERVICE" },
  { details: "Japanese princess to wed commoner.", type: "SERVICE" },
  { details: "Australian walks 100km after outback crash.", type: "COMPLAINT" },
  { details: "Man charged over missing wedding girl.", type: "SERVICE" },
  { details: "Los Angeles battles huge wildfires.", type: "COMPLAINT" },
];

const weeklyData = [
  {
    name: "M",
    uv: 4000,
  },
  {
    name: "T",
    uv: 3000,
  },
  {
    name: "W",
    uv: 2000,
  },
  {
    name: "T",
    uv: 2780,
  },
  {
    name: "F",
    uv: 1890,
  },
  {
    name: "S",
    uv: 2390,
  },
  {
    name: "S",
    uv: 3490,
  },
];

const hourlyData = [
  {
    name: "12am",
    uv: 4000,
  },
  {
    name: "4am",
    uv: 3000,
  },
  {
    name: "8am",
    uv: 2000,
  },
  {
    name: "12pm",
    uv: 2780,
  },
  {
    name: "16pm",
    uv: 1890,
  },
  {
    name: "20pm",
    uv: 2390,
  },
];
const issuesData = [
  { name: "Service", data: 400, fill: "#1890ff" },
  { name: "Complaints", data: 700, fill: "#82ca9d" },
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.data.userRole);
  useEffect(() => {
    dispatch(setMenuItem("dashboard"));
  });
  return (
    <DashboardContainer>
      {userRole !== "ADMIN" ? (
        <UserDashboard>
          <Row justify="end">
            <Col>
              <Button
                size="large"
                type="primary"
                onClick={() => dispatch(setReqServiceVisible(true))}
              >
                Request Service
              </Button>
              <RequestServiceModal />
            </Col>
          </Row>
          <Row>
            <Col flex={1}>
              <Card hoverable title="Current Usage">
                <BulbOutlined height={50} width={50} />
                <b>500 kWh</b>
              </Card>
            </Col>
            <Col flex={1}>
              <Card hoverable title="Estimated Payment">
                <b>$ 150</b>
              </Card>
            </Col>
            <Col flex={1}>
              <Card hoverable title="Dues">
                <b>$ 200</b>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col flex={1}>
              <List
                size="large"
                header={
                  <div>
                    <b>
                      <h2>Notifications</h2>
                    </b>
                  </div>
                }
                bordered
                dataSource={notifications}
                renderItem={(item) => <List.Item>{item}</List.Item>}
                style={{ background: "#FFFFFF" }}
              />
            </Col>
            <Col flex={1}>
              <List
                size="large"
                header={
                  <div>
                    <b>
                      <h2>Services & Complaints</h2>
                    </b>
                  </div>
                }
                bordered
                dataSource={servOrCompls}
                renderItem={(item) => (
                  <List.Item
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {item.details}
                    <Tag>{item.type}</Tag>
                    <Button type="link" onClick={() => {}}>
                      Delete
                    </Button>
                  </List.Item>
                )}
                style={{ background: "#FFFFFF" }}
              />
            </Col>
          </Row>
        </UserDashboard>
      ) : (
        <AdminDashboard>
          <Row>
            <Col flex={2}>
              <Card hoverable title="Energy Usage">
                <BulbOutlined height={50} width={50} />
                <b>5 MWh</b>
              </Card>
            </Col>

            <Col flex={1}>
              <Card hoverable title="Pending Issues">
                <b>20</b>
              </Card>
            </Col>
          </Row>
          <GraphsRow>
            <Col flex={1}>
              <BarChart width={400} height={250} data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </Col>
            <Col flex={1}>
              <LineChart width={400} height={250} data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </Col>
            <Col flex={1}>
              <PieChart width={400} height={250}>
                <Pie
                  cx="50%"
                  cy="50%"
                  data={issuesData}
                  dataKey="data"
                  nameKey="name"
                  outerRadius={80}
                />
                <Legend />
              </PieChart>
            </Col>
          </GraphsRow>
        </AdminDashboard>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
