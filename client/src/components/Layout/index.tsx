import Header from "../Header";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default index;
