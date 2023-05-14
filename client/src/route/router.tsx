import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SubjectPage from "../pages/SubjectPage/SubjectPage";
import { RegistrationPage, LoginPage } from "../pages/AuthPages";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/subjects/:name", element: <SubjectPage /> },
    ],
  },
  { path: "/registration", element: <RegistrationPage /> },
  { path: "/login", element: <LoginPage /> },
]);

export default router;
