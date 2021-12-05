import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import Axios from "axios";

import { setMenuItem } from "../reducers/dataSlice";
import checkRole from "../components/checkRole";
import { Button, Modal, Form, Input } from "antd";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new user"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="meterid"
          label="MeterId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="consumerType"
          label="Consumer-Type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="systemType" label="System Type">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);

  const onCreate = async (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        meterId: values.meterid,
        type: values.consumerType,
        address: values.address,
        phone: values.phone,
        consumedEnergy: values.consumedEnergy,
        email: values.email,
        systemType: values.systemType,
      }),
    };
    await fetch(
      "https://electrothon-backend.herokuapp.com/",
      requestOptions
    ).then(async () => {
      Axios.get("https://electrothon-backend.herokuapp.com/").then((response) =>
        setUsers(response.data)
      );
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuItem("usersList"));
    Axios.get("https://electrothon-backend.herokuapp.com/").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, [dispatch]);
  const deleteUser = (id) => {
    Axios.delete(`https://electrothon-backend.herokuapp.com/${id}`).then(
      async () => {
        Axios.get(
          "https://electrothon-backend.herokuapp.com/"
        ).then((response) => setUsers(response.data));
        // history.push("/usersList");
      }
    );
  };

  return (
    <>
      <Button
        type="primary"
        style={{ margin: "2%" }}
        onClick={() => {
          setVisible(true);
        }}
      >
        New User
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Meter-id</th>
            <th>Email</th>
            <th>Phone</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.meterId}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val._id}</td>
                <Button
                  onClick={() => {
                    deleteUser(val._id);
                  }}
                  variant="danger"
                >
                  Delete
                </Button>{" "}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default checkRole(UsersList);
