import * as yup from 'yup'

export const LoginSchema = yup.object({
    email: yup.string().email('Неверная почта').required('Обязательная почта'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Обязательный пароль'),
}).required()