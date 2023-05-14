import { Link } from "react-router-dom";
import Heading from "../Heading";

import styles from "./index.module.css";
import Subjects from "./Subjects";

const index = () => {
  return (
    <nav className={styles.navbar}>
      <Heading>
        <Link to="/">Tasker</Link>
      </Heading>
      <Subjects />
    </nav>
  );
};

export default index;
