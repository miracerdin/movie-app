import { Navigate, Outlet } from "react-router-dom";
// import store from "../store";
// import auth from "../store/auth";
const PrivateRouter = () => {
  const user = JSON.parse(localStorage.getItem("user")) ?? false;
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
