import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setMenuItem } from "../reducers/dataSlice";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuItem("profile"));
  });
  return <>Profile</>;
};

export default Profile;
