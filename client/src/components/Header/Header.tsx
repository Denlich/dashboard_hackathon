import SearchBox from "./SearchBox";

import styles from "./index.module.css";

const header = () => {
  return (
    <header className={styles.grid}>
      <SearchBox />
    </header>
  );
};

export default header;
