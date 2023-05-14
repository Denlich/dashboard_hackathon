import style from "./CreateSubject.module.css";
import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Button from "../../UI/Button";

const schema = z.object({
    name: z.string().min(2, {message: "Назва повинна містити не менше двох символів"})
        .max(200, {message: "Максимальна границя: 200 символів"}),
    desc: z.string().min(10, {message: "Опис повинен містити не менше 10 символів"})
        .max(400, {message: "Максимальна границя: 400 символів"}),
    grade: z.number({invalid_type_error: "Формат не вірний"}).min(0, {message: "Це повинне бути додатнє число"})
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

                {errors.desc && <div className={style.error}>{errors.desc.message}</div>}
                <div className={style.raw}>
                    <span className={style.label}>Опис</span>
                    <input
                        {...register("desc")}
                        className={style.input}
                        type="text"
                        placeholder="Введіть назву"
                        formNoValidate
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
                        formNoValidate={true}
                    />
                </div>

                <Button color="blue" onClick={() => console.log("adsasd")}>Створити</Button>
            </form>
        </>
    );
};

export default CreateSubject;