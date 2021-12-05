import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import { setUserRole } from "./reducers/dataSlice";
import HomePage from "./pages/HomePage";

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.data.userRole);
  const userId = useSelector((state) => state.data.userId);
  useEffect(() => {
    const getRole = async () => {
      await axios
        .get(`https://electrothon-backend.herokuapp.com/${userId}`)
        .then((response) => {
          dispatch(setUserRole(response.data.role));
        })
        .catch((error) => console.error(error));
    };
    getRole();
  }, [dispatch, userRole, history, userId]);
  return <HomePage />;
};

export default App;
