import {z} from "zod";

const schema = z.object({
    name: z.string().min(2, {message: "Назва повинна містити не менше двох символів"})
        .max(200, {message: "Максимальна границя: 200 символів"}),
    deadline: z.string().min(2, {message: "Опис повинен містити не менше 2 символів"})
        .max(400, {message: "Максимальна границя: 100 символів"}),
    grade: z.number({invalid_type_error: "Формат не вірний"}).min(0, {message: "Це повинно бути додатнє число"})
});

type FormFormat = z.infer<typeof schema>

export {schema}
export default FormFormat