import style from "./CreateSubject.module.css";
import {FieldValues, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Button from "../../UI/Button";
import FormFormat, {schema} from "../Schema/schema";

interface Props {
    onSubmit: (subject: FieldValues) => void;
}

const CreateSubject = ({onSubmit}: Props) => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormFormat>({resolver: zodResolver(schema)});

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={style.form}
                noValidate
            >
                {errors.name && <div className={style.error}>{errors.name.message}</div>}
                <div className={style.raw}>
                    <span className={style.label}>Назва</span>
                    <input
                        {...register("name")}
                        className={style.input}
                        type="text"
                        placeholder="Введіть назву"
                    />
                </div>

                {errors.desc && <div className={style.error}>{errors.desc.message}</div>}
                <div className={style.raw}>
                    <span className={style.label}>Опис</span>
                    <input
                        {...register("desc")}
                        className={style.input}
                        type="text"
                        placeholder="Введіть назву"
                    />
                </div>

                {errors.grade && <div className={style.error}>{errors.grade?.message}</div>}
                <div className={style.raw}>
                    <span className={style.label}>Максимум балів</span>
                    <input
                        {...register("grade", {valueAsNumber: true})}
                        className={style.input}
                        type="number"
                        placeholder="Введіть число"
                    />
                </div>

                <Button color="blue">Створити</Button>
            </form>
        </>
    );
};

export default CreateSubject;