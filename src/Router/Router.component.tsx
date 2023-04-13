import Auth from "pages/Auth";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import Detail from "pages/Detail/Detail.component";
import Error from "pages/Error";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.component";

const Router = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
      <Route path="auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
