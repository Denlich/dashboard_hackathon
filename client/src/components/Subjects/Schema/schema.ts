import {z} from "zod";

const schema = z.object({
    name: z.string().min(2, {message: "Назва повинна містити не менше двох символів"})
        .max(200, {message: "Максимальна границя: 200 символів"}),
    desc: z.string().min(10, {message: "Опис повинен містити не менше 10 символів"})
        .max(400, {message: "Максимальна границя: 400 символів"}),
    grade: z.number({invalid_type_error: "Формат не вірний"}).min(0, {message: "Це повинне бути додатнє число"})
});

type FormFormat = z.infer<typeof schema>

export default FormFormat
export {schema}