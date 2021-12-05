import { Form, Modal, Input, Radio } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { setReqServiceVisible } from "../reducers/dataSlice";

const RequestServiceModal = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const requestServiceVisible = useSelector(
    (state) => state.data.requestServiceVisible
  );
  return (
    <Modal
      visible={requestServiceVisible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={() => {
        dispatch(setReqServiceVisible(false));
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            dispatch(setReqServiceVisible(false));
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="request_service"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: "Please input the type",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="COMPLAINT">Complaint</Radio>
            <Radio value="SERVICE">Service</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="details" label="Details">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RequestServiceModal;