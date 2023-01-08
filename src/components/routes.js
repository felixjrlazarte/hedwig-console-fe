import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from "react-router-dom";
import Layout from "./common/Layout";
import NotFound from "./common/NotFound";
// Components
import Login from "./features/Login";
import Dashboard from "./features/Dashboard";
import Users from "./features/Users";
import SMS from "./features/Blaster/SMS";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="login" element={<Login />} />

      <Route element={<Layout />}>
        <Route
          path="dashboard"
          element={<Dashboard />}
        />
        <Route
          path="blaster/sms"
          element={<SMS />}
        />
      </Route>

      <Route element={<Layout authorize="ADMIN" />}>
        <Route
          path="users"
          element={<Users />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
      <Route path="iamokay" element={<h3>Hey There!!! The App is Healthy</h3>} />
    </Route>
  ));