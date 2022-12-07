import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { IContactCreate, IModal } from "../../interfaces";
import Form from "../form";
import Input from "../input";
import { StyledModal } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import Button from "../button";
import { UserContext } from "../../providers/user";

function ModalCashOut({ open, handleClose }: IModal) {
  const schema = yup.object().shape({
    fullName: yup.string().required("Nome do contato obrigatório"),
    phone: yup.number().required("Informe um telefone"),
    email: yup.string().email().required("Informe um email"),
  });

  const { createContact } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactCreate>({ resolver: yupResolver(schema) });

  useEffect(() => {
    for (const error in errors) {
      type ObjectKey = keyof typeof errors;
      toast.error(errors[error as ObjectKey]?.message, {
        toastId: errors[error as ObjectKey]?.message,
      });
    }
  }, [errors]);

  const customMakeTransaction = (data: IContactCreate) => {
    createContact(data, handleClose);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <StyledModal>
          <Form handleSubmit={handleSubmit(customMakeTransaction)}>
            <h2>Envie CA$H</h2>
            <div>
              <Input
                name="fullName"
                register={register}
                label="Nome do contato:"
                type="text"
              />
              <Input
                name="phone"
                register={register}
                label="Telefone:"
                type="phone"
              />
              <Input
                name="email"
                register={register}
                label="Email:"
                type="email"
              />
            </div>

            <Button name="Enviar" type="submit" />
          </Form>
        </StyledModal>
      </Box>
    </Modal>
  );
}

export default ModalCashOut;
