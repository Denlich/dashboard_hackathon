import style from "../../Subjects/CreateSubject/CreateSubject.module.css"
import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Button from "../../UI/Button";

const schema = z.object({
    name: z.string().min(2, {message: "Назва повинна містити не менше двох символів"})
        .max(200, {message: "Максимальна границя: 200 символів"}),
    deadline: z.string().min(2, {message: "Опис повинен містити не менше 2 символів"})
        .max(400, {message: "Максимальна границя: 100 символів"}),
    grade: z.number({invalid_type_error: "Формат не вірний"}).min(0, {message: "Це повинно бути додатнє число"})
});

type FormFormat = z.infer<typeof schema>

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
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
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