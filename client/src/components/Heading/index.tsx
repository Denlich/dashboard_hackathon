import { ReactNode } from "react";
import styles from "./index.module.css";

interface Props {
  children: ReactNode;
}

const index = ({ children }: Props) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export default index;
