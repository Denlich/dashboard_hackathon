import { BsSearch } from "react-icons/bs";
import styles from "./index.module.css";
import Button from "../UI/Button";

const SearchBox = () => {
  return (
    <>
      <form className={styles.form}>
        <button className={styles.button} type="submit">
          <BsSearch size="15" className={styles.icon} />
        </button>
        <input type="search" placeholder="Пошук завдання" />
      </form>
      <Button children="Вийти" color="red" handleClick={() => {}} />
    </>
  );
};

export default SearchBox;
