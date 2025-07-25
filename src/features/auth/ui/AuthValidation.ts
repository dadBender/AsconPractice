import * as yup from 'yup';

export const registerSchema = yup.object({
  email: yup.string().email('Неверный email').required('Обязательное поле'),
  login: yup.string().min(3, 'Минимум 3 символа').required('Обязательное поле'),
  password: yup.string().min(6, 'Минимум 6 символов').required('Обязательное поле'),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;
