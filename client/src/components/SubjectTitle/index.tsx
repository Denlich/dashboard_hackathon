import { Link } from "react-router-dom";
import Text from "../Text";

import styles from "./index.module.css";

interface Props {
  children: string;
  color?: string;
  id?: number;
}

const index = ({ children, color = "#fff", id }: Props) => {
  return (
    <Link
      to={id != undefined ? `/subjects/${id}` : `/subjects/all`}
      className={styles.subject}
    >
      <div className={styles.circle} style={{ background: color }} />
      <Text>{children}</Text>
    </Link>
  );
};

export default index;
