import Layout from "../components/Layout";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return <Layout />;
};

export default PrivateRoutes;
