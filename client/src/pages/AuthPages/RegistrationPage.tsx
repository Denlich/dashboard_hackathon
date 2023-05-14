import { RegistrationForm } from "../../components/Forms";
import Heading from "../../components/Heading";

import styles from "./index.module.css";

const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Heading>Реєстрація</Heading>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
