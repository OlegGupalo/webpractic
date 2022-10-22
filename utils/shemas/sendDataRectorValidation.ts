import * as yup from 'yup'

export const SendData = yup.object({
    email: yup.string().email('Неверная почта').required('Почта - обязательное поле'),
    
}).required()