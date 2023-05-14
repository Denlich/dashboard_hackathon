import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { z } from "zod";
import Button from "../UI/Button";
import Text from "../Text";

import styles from "./index.module.css";

const schema = z.object({
  nickname: z.string().min(3),
  password: z.string().min(5),
});

type FormData = z.infer<typeof schema>;

const AuthorizationForm = () => {
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
        Увійти
      </Button>
      <Text color="grey">
        Ще немає аккаунту? <Link to="/registration">Реєстрація</Link>
      </Text>
    </form>
  );
};

export default AuthorizationForm;
