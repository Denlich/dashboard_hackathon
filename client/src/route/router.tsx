import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SubjectPage from "../pages/SubjectPage/SubjectPage";
import { RegistrationPage, LoginPage } from "../pages/AuthPages";
import PrivateRoutes from "./PrivateRoutes";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/subjects/:id", element: <SubjectPage /> },
        ],
      },
    ],
  },
  { path: "/registration", element: <RegistrationPage /> },
  { path: "/login", element: <LoginPage /> },
]);

export default router;
