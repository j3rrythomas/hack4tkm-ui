import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setMenuItem } from "../reducers/dataSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuItem("dashboard"));
  });
  return <>Dashboard</>;
};

export default Dashboard;
