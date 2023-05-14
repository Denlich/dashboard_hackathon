import { ReactNode } from "react";
import styles from "./index.module.css";

interface Props {
  children: ReactNode;
  color?: "black" | "grey" | "red";
}

const index = ({ children, color = "black" }: Props) => {
  return <p className={styles.text + " " + styles[color]}>{children}</p>;
};

export default index;
