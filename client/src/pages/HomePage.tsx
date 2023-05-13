import { Link } from "react-router-dom";
import Heading from "../components/Heading";

const HomePage = () => {
  return (
    <>
      <Heading>HomePage</Heading>
      <Link to="/subjects/op">OP</Link>
    </>
  );
};

export default HomePage;
