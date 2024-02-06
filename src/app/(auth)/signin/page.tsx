"use client";

import TextField from "@/components/ui/TextField/TextField";
import Box, { BoxProps } from "@mui/material/Box";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import imgSignin from "@/assets/images/img_login.png";
import Typography from "@mui/material/Typography";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Button from "@/components/ui/Button/Button";
import { SigninData } from "@/@types/user";
import {
  CheckCircleOutline,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";
import { IconButton, InputAdornment } from "@mui/material";
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import { clientId } from "@/config/google.config";
import { signIn, useSession } from "next-auth/react";

export default function SignupForm() {
  const session = useSession();
  const { control, handleSubmit } = useForm<SigninData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { vertical, horizontal }: SnackbarOrigin = {
    vertical: "top",
    horizontal: "center",
  };

  const [snackOpen, setSnackOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(data: SigninData) {
    signIn("credentials", { redirect: true, ...data, callbackUrl: '/meus-projetos' }).then((data) => {
      if (data && data.ok) handleSnackOpen();
    });
  }

  function onGoogleSuccess(credentials: CredentialResponse) {
    signIn("credentials", { redirect: true, ...credentials, callbackUrl: '/signin' }).then((data) => {
      if (data && data.ok) handleSnackOpen();
    });
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSnackOpen() {
    setSnackOpen(true);
  }

  function onSnackClose() {
    setSnackOpen(false);
  }
  return (
    <GoogleOAuthProvider clientId={clientId ?? ""}>
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
            Login feito com sucesso
          </Alert>
        </Snackbar>
        <Box {...flexFull} width={"50%"} gap={0}>
          <Image
            src={imgSignin}
            sizes={"100vw"}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </Box>
        <Box
          {...flexFull}
          gap={2}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography fontSize={"48px"}>Entre no Orange Portfólio</Typography>
          <GoogleLogin onSuccess={onGoogleSuccess} />
          <form onSubmit={handleSubmit(onSubmit)} className="w-[517px]">
            <Box
              display={"flex"}
              width={"100%"}
              gap={1}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Typography fontSize={"24px"} color={"#515255"}>
                Faça login com email
              </Typography>
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
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    type={showPassword ? "text" : "password"}
                  />
                )}
              />
              <Button variant={"contained"} size={"large"} type={"submit"}>
                Entrar
              </Button>
              <Link
                href={"/signup"}
                style={{
                  width: "100%",
                  marginRight: "auto",
                  color: "#818388",
                }}
              >
                Cadastre-se
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </GoogleOAuthProvider>
  );
}

const flexFull: BoxProps = {
  display: "flex",
  width: "100%",
  height: "100%",
  overflow: "hidden",
};
