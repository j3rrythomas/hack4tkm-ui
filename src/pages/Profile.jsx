import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Row, Col } from 'antd';
import { setMenuItem } from "../reducers/dataSlice";
import { Avatar,Button,Modal,Upload,message } from 'antd';
import { useState } from "react";
import {  Form, Input, Select } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import "../App.css";

const { Option } = Select;

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuItem("profile"));
  });
  const userRole = useSelector(state=>state.data.userRole);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (

    <div>
      <Row span={2}>
        <Col span={4} offset={3}>
          <div style={{ marginTop: "60px"}}><Avatar size={100} icon={<UserOutlined />} /></div>
        </Col>
        <Col span={4} offset={12}>
          <div style={{marginTop: "150px"}}><Button type="primary" onClick={showModal}>Edit Profile</Button>
            <Modal title="Edit Profile" visible={isModalVisible} onSubmit={handleOk} onCancel={handleCancel}>
                <Form layout="vertical" hideRequiredMark>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                      >
                        <Input placeholder="Please enter your name" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please enter your Email ID' }]}
                      >
                        <Input
                          style={{ width: '100%' }}
                          addonAfter=".com"
                          placeholder="Please enter your email"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="meterno"
                        label="Meter Number"
                        rules={[{ required: true, message: 'Please input your meter number' }]}
                      >
                        <Input placeholder="Please input your meter number" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="type"
                        label="Type"
                        rules={[{ required: true, message: 'Please choose the type of your System' }]}
                      >
                        <Select placeholder="Please choose the type">
                          <Option value="phase_one">Phase 1</Option>
                          <Option value="phase_three">Phase 3</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                  {userRole === "ADMIN" ? (
                    <></>
                ) : (
                  <Col span={12}>
                  <Form.Item
                    name="approver"
                    label="Approver"
                    rules={[{ required: true, message: 'Please choose the approver' }]}>
                    <Select placeholder="Please choose the approver">
                      <Option value="jack">Jack Ma</Option>
                      <Option value="tom">Tom Liu</Option>
                    </Select>
                  </Form.Item>
                </Col>
                 )};
                  
                    
                    <Col span={12}>
                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                      >
                        <Input
                          style={{ width: '100%' }}
                          addonBefore="+91"
                          placeholder="Please enter your phone number"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={20}>
                      <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                          {
                            required: true,
                            message: 'please enter your adress',
                          },
                        ]}
                      >
                        <Input.TextArea rows={4} placeholder="please enter your address" />
                      </Form.Item>
                    </Col>
                    <Col>
                    <Form.Item
                        name="photo"
                        label="Photo"
                        rules={[
                          {
                            required: false,
                            message: 'please enter your adress',
                          },
                        ]}
                      >
                        <Upload {...props}>
                          <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                        </Form.Item>
                    </Col>
                  </Row>
              </Form>
            </Modal>
          </div>
        </Col>
        </Row>
        <div style={{border:"0.25px black solid", padding:"20px",marginLeft:"145px", marginRight:"120px", marginTop:"20px"}}>
          <Row span={2} style={{marginTop:"40px"}}>
            <Col span={8} offset={1}>Name: </Col>
            <Col span={6} offset={1}>Meter No: </Col>
            {userRole === "ADMIN" ? (
              <Col span={6} offset={1}>Role: Admin </Col>
          ) : (
              <Col span={6} offset={1}>Type: </Col>
          )};

          </Row>
          <Row span={3} style={{marginTop:"80px"}}>
            <Col span={8} offset={1}>Address: </Col>
            <Col span={6} offset={4}>Email: </Col>
          </Row>
          <Row span={3} style={{marginTop:"80px"}}>
            <Col span={8} offset={1}>Type of System: </Col>
            <Col span={6} offset={4}>Phone: </Col>
          </Row>
        </div>
        
    </div>
  
  //<>Profile</>;
  )
};

export default Profile;
