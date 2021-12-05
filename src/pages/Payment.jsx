import { Button } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { setMenuItem } from "../reducers/dataSlice";
import { checkUserRole } from "../components";

const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;
const Payment = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuItem("payment"));
  });
  return (
    <PaymentContainer>
      <Button type="primary" size="large">
        Go to Payment Gateway
      </Button>
    </PaymentContainer>
  );
};

export default checkUserRole(Payment);
