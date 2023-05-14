import { Link } from "react-router-dom";
import Text from "../Text";

import styles from "./index.module.css";

interface Props {
  children: string;
  color?: string;
}

const index = ({ children, color = "#fff" }: Props) => {
  return (
    <Link to="/" className={styles.subject}>
      <div className={styles.circle} style={{ background: color }} />
      <Text>{children}</Text>
    </Link>
  );
};

export default index;
