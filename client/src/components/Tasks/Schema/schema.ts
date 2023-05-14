import {z} from "zod";

const schema = z.object({
    name: z.string().min(2, {message: "Назва повинна містити не менше двох символів"})
        .max(200, {message: "Максимальна границя: 200 символів"}),
    deadline: z.coerce.date().min(new Date(), {message: "Дата повинна бути вказана в майбутньому"}),
    points: z.number({invalid_type_error: "Формат не вірний"}).min(0, {message: "Це повинно бути додатнє число"})
});

type FormFormat = z.infer<typeof schema>

export {schema}
export default FormFormat