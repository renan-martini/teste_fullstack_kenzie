import * as yup from "yup";

export const contactSchema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.number().required(),
});
