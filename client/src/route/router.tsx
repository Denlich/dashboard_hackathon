import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage/HomePage";
import SubjectPage from "../pages/SubjectPage/SubjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/subjects/:name", element: <SubjectPage /> },
    ],
  },
]);

export default router;
