import style from "../../Subjects/CreateSubject/CreateSubject.module.css";
import Button from "../../UI/Button";
import {FieldValues, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ITask} from "../../../common/enitity/ITask";
import Grade from "../Grade/Grade";
import FormFormat, {schema} from "../Schema/schema";
import Date from "../Date/Date";

interface Props {
    task: ITask;
    onSubmit: (subject: FieldValues) => void;
}

const UpdateTask = ({task, onSubmit}: Props) => {

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
                    <span className={style.label}><Date date={task.deadline}/></span>
                    <input
                        type="date"
                        {...register("deadline")}
                        className={style.input}
                        placeholder="Введіть назву"
                    />
                </div>

                {errors.points && <div className={style.error}>{errors.points?.message}</div>}
                <div className={style.raw}>
                    <span className={style.label}><Grade grade={task.points}/></span>
                    <input
                        {...register("points", {valueAsNumber: true})}
                        className={style.input}
                        type="number"
                        placeholder="Введіть нову оцінку"
                    />
                </div>

                <Button color="blue" handleClick={() => console.log("Обновити")}>Обновити</Button>
            </form>
        </>
    );
};


export default UpdateTask;