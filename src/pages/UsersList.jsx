import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setMenuItem } from "../reducers/dataSlice";
import checkRole from "../components/checkRole";

const UsersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuItem("usersList"));
  });
  return <>Users List</>;
};

export default checkRole(UsersList);
