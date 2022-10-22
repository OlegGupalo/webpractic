import * as yup from 'yup'

export const RegisterSchema = yup.object({
    email: yup.string().email('Неверная почта').required('Почта - обязательное поле'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Пароль - обязательное поле'),
    role: yup.string().required('Роль - обязательное поле')
}).required()