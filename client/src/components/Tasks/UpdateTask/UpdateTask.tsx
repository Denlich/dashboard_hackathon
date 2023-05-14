import style from "../../Subjects/CreateSubject/CreateSubject.module.css";
import Button from "../../UI/Button";
import {FieldValues, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ITask} from "../../../common/enitity/ITask";
import Grade from "../Grade/Grade";
import FormFormat, {schema} from "../Schema/schema";

interface Props {
    task: ITask;
}

const UpdateTask = ({task}: Props) => {
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
                    <span className={style.label}>{task.name}</span>
                    <input
                        {...register("name")}
                        className={style.input}
                        type="text"
                        placeholder="Введіть нову назву"
                    />
                </div>

                {errors.deadline && <div className={style.error}>{errors.deadline.message}</div>}
                <div className={style.raw}>
                    <span className={style.label}>{task.deadline}</span>
                    <input
                        {...register("deadline")}
                        className={style.input}
                        type="text"
                        placeholder="Введіть новий дедлайн"
                        formNoValidate
                    />
                </div>

                {errors.grade && <div className={style.error}>{errors.grade?.message}</div>}
                <div className={style.raw}>
                    <span className={style.label}><Grade grade={task.grade}/></span>
                    <input
                        {...register("grade", {valueAsNumber: true})}
                        className={style.input}
                        type="number"
                        placeholder="Введіть нову оцінку"
                        formNoValidate={true}
                    />
                </div>

                <Button color="blue" onClick={() => console.log("Обновити")}>Обновити</Button>
            </form>
        </>
    );
};


export default UpdateTask;