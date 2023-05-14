import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import SubjectPage from "../pages/SubjectPage";
import { RegistrationPage, LoginPage } from "../pages/AuthPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/subjects/:name", element: <SubjectPage /> },
    ],
  },
  { path: "/registration", element: <RegistrationPage /> },
  { path: "/login", element: <LoginPage /> },
]);

export default router;
