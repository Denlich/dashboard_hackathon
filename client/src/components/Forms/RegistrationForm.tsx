import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../UI/Button";
import Text from "../Text";

import styles from "./index.module.css";

const schema = z.object({
  nickname: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(5),
});

type FormData = z.infer<typeof schema>;

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputBox}>
        <Text color="grey">Нікнейм:</Text>
        <input
          {...register("nickname")}
          id="nickname"
          type="text"
          placeholder="Впишіть нікнейм"
        />
        {errors.nickname && <Text color="red">{errors.nickname.message}</Text>}
      </div>
      <div className={styles.inputBox}>
        <Text color="grey">Пошта:</Text>
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder="Впишіть пошту"
        />
        {errors.email && <Text color="red">{errors.email.message}</Text>}
      </div>
      <div className={styles.inputBox}>
        <Text color="grey">Пароль:</Text>
        <input
          {...register("password")}
          id="password"
          type="password"
          placeholder="Впишіть пароль"
        />
        {errors.password && <Text color="red">{errors.password.message}</Text>}
      </div>
      <Button handleClick={() => {}} color="blue">
        Зареєструватися
      </Button>
      <Text color="grey">
        Уже є аккаунт? <Link to="/login">Вхід</Link>
      </Text>
    </form>
  );
};

export default RegistrationForm;
