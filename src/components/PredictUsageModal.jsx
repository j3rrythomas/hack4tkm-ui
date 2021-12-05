import { Form, Modal, DatePicker, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setPredictUsageVisible } from "../reducers/dataSlice";

const PredictUsageModal = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const predictUsageVisible = useSelector(
    (state) => state.data.predictUsageVisible
  );
  return (
    <Modal
      visible={predictUsageVisible}
      title="Predict Usage"
      okText="Predict"
      cancelText="Cancel"
      onCancel={() => {
        dispatch(setPredictUsageVisible(false));
      }}
      onOk={() => {
        form
          .validateFields()
          .then(({ date, time }) => {
            form.resetFields();
            const formattedDate = date.format("DD/MM/YY");
            const formattedTime = time.format("HH:mm:[00]");
            axios
              .post("https://hack4tkm-blackouts.herokuapp.com/predict", {
                date: formattedDate,
                time: formattedTime,
              })
              .then((response) =>
                message.info(
                  `The predicted usage for given time is ${response.data.result.toFixed(
                    2
                  )}`,
                  10
                )
              )
              .catch((error) => console.error(error));
            dispatch(setPredictUsageVisible(false));
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="predict_usage"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              required: true,
              message: "Please input the date",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="time"
          label="Time"
          rules={[
            {
              required: true,
              message: "Please input the date",
            },
          ]}
        >
          <TimePicker format="HH:mm" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PredictUsageModal;
