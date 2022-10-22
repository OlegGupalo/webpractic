import * as yup from 'yup'

export const UpadateUserSchema = yup.object({
    email: yup.string().email('Неверная почта'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов'),
    role: yup.string()
}).required()