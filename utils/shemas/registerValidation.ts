import * as yup from 'yup'

export const RegisterSchema = yup.object({
    name: yup.string().min(1).max(15, 'Пожалуйста, введите своё имя').required('Имя - обязательное поле'),
    surname: yup.string().max(15, 'Пожалуйста, введите свою фамилию').required('Фамилия - обязательное поле'),
    login: yup.string().email('Неверный логин').required('Почта/Логин - обязательное поле'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Пароль - обязательное поле'),
    role: yup.string().required('Роль - обязательное поле')
}).required()