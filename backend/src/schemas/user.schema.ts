import * as yup from "yup";
import { hashSync } from "bcryptjs";

const userSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Senha deve possuir ao menos 8 caracteres")
    .matches(/.*\d/, "Senha Deve conter ao menos um dígito")
    .matches(/.*[A-Z]/, "Senha Deve conter ao menos uma letra maiúscula")
    .required(),
  email: yup.string().required().email(),
  fullName: yup.string().required(),
  phone: yup.number().required(),
});

export default userSchema;

export const userLoginSchema = yup.object().shape({
  password: yup.string().required(),
  email: yup.string().required().email(),
});
