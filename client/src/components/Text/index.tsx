import styles from "./index.module.css";

interface Props {
  children: string;
}

const index = ({ children }: Props) => {
  return <p className={styles.text}>{children}</p>;
};

export default index;
