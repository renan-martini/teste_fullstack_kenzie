import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button";
import Form from "../../components/form";
import Header from "../../components/header";
import Input from "../../components/input";
import { UserContext } from "../../providers/user";
import { StyledLogin } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { IUserLogin } from "../../interfaces";

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email().required("email obrigatório"),
    password: yup.string().required("Informe uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(schema) });

  const { logar } = useContext(UserContext);

  const login = (data: IUserLogin) => {
    logar(data);
  };

  useEffect(() => {
    for (const error in errors) {
      type ObjectKey = keyof typeof errors;
      toast.error(errors[error as ObjectKey]?.message, {
        toastId: errors[error as ObjectKey]?.message,
      });
    }
  }, [errors]);

  return (
    <>
      <Header />
      <StyledLogin>
        <Slide direction="up" mountOnEnter in={true} timeout={1000}>
          <Box>
            <Form handleSubmit={handleSubmit(login)}>
              <h4>LOGIN:</h4>

              <div>
                <Input label="Email:" name="email" register={register} />

                <Input
                  type="password"
                  label="Password:"
                  name="password"
                  register={register}
                />
              </div>

              <Button name="Login" type="submit" />

              <p>
                Ainda não possui cadastro?{" "}
                <Link className="link" to={"/registro"}>
                  Cadastre-se
                </Link>
              </p>
            </Form>
          </Box>
        </Slide>
      </StyledLogin>
    </>
  );
}

export default Login;
