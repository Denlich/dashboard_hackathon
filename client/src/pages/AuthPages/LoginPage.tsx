import { AuthorizationForm, RegistrationForm } from "../../components/Forms";
import Heading from "../../components/Heading";

import styles from "./index.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Heading>Авторизація</Heading>
        <AuthorizationForm />
      </div>
    </div>
  );
};

export default LoginPage;
