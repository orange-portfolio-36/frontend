"use client";

import TextField from "@/components/ui/TextField/TextField";
import Box, { BoxProps } from "@mui/material/Box";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import imgSignup from "@/assets/images/img_cadastro.png";
import Typography from "@mui/material/Typography";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Button from "@/components/ui/Button/Button";
import { SignupData } from "@/@types/user";
import { userService } from "@/services/userService";
import { CheckCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";

export default function SignupForm() {
  const { control, handleSubmit } = useForm<SignupData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const { vertical, horizontal }: SnackbarOrigin = {
    vertical: "top",
    horizontal: "center",
  };

  const [snackOpen, setSnackOpen] = useState(false);

  function onSubmit(data: SignupData) {
    userService.signup(data).then(() => {
      handleSnackOpen();
    });
  }

  function handleSnackOpen() {
    setSnackOpen(true);
  }

  function onSnackClose() {
    setSnackOpen(false);
  }
  return (
    <Box {...flexFull}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        open={snackOpen}
        onClose={onSnackClose}
        autoHideDuration={3000}
      >
        <Alert
          onClose={onSnackClose}
          severity="success"
          icon={<CheckCircleOutline />}
          variant="filled"
          sx={{ width: "100%" }}
        >
          Cadastro feito com sucesso
        </Alert>
      </Snackbar>
      <Box {...flexFull} width={"50%"} gap={0}>
        <Image
          src={imgSignup}
          sizes={"100vw"}
          style={{ width: "100%", height: "auto" }}
          alt="Mulher sentada em frente a um notebook"
        />
      </Box>
      <Box
        {...flexFull}
        gap={2}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography fontSize={"48px"}>Cadastre-se</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[517px]">
          <Box
            display={"flex"}
            gap={1}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Box display={"flex"} gap={1}>
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                  <TextField fullWidth label={"Nome"} {...field} />
                )}
              />
              <Controller
                control={control}
                name="lastName"
                render={({ field }) => (
                  <TextField fullWidth label={"Sobrenome"} {...field} />
                )}
              />
            </Box>

            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField label={"Email"} fullWidth {...field} />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <TextField
                  label={"Senha"}
                  fullWidth
                  {...field}
                  type={"password"}
                />
              )}
            />
            <Button variant={"contained"} size={"large"} type={"submit"}>
              Cadastrar
            </Button>
            <Link href={'/signin'}>
              <Typography>Voltar para o login</Typography>
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

const flexFull: BoxProps = {
  display: "flex",
  width: "100%",
  height: "100%",
  overflow: "hidden",
};
