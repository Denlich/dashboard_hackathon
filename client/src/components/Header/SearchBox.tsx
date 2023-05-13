import { BsSearch } from "react-icons/bs";
import styles from "./index.module.css";

const SearchBox = () => {
  return (
    <form>
      <input type="search" placeholder="Search for the person or the poll" />
      <button className={styles.button} type="submit">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBox;
