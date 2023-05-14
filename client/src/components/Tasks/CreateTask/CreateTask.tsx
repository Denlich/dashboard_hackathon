import style from "../../Subjects/CreateSubject/CreateSubject.module.css"
import {FieldValues, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Button from "../../UI/Button";
import FormFormat, {schema} from "../Schema/schema";

const CreateSubject = () => {
    const onSubmit = (subject: FieldValues) => {
        console.log(subject);
    };

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

                {errors.deadline && <div className={style.error}>{errors.deadline.message}</div>}
                <div className={style.raw}>
                    <span className={style.label}>Дедлайн</span>
                    <input
                        {...register("deadline")}
                        className={style.input}
                        type="text"
                        placeholder="Введіть назву"
                        formNoValidate
                    />
                </div>

                {errors.grade && <div className={style.error}>{errors.grade?.message}</div>}
                <div className={style.raw}>
                    <span className={style.label}>Бал</span>
                    <input
                        {...register("grade", {valueAsNumber: true})}
                        className={style.input}
                        type="number"
                        placeholder="Введіть число"
                        formNoValidate={true}
                    />
                </div>

                <Button color="blue">Створити</Button>
            </form>
        </>
    );
};

export default CreateSubject;