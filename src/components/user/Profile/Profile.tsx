'use client'
import Button from "@/components/ui/Button/Button";
import ModalGlobal from "@/components/ui/Modal/Modal";
import ProjectForm from "@/components/ui/ProjectForm/ProjectForm";
import { Avatar, Box, Typography } from "@mui/material";
import { useState } from "react";

export default function Profile() {
  const [open, setOpen] = useState(false);

  function onClose() {
    setOpen(false);
  }
  return (
    <Box
      data-testid="Profile"
      display={"flex"}
      width={"364px"}
      justifyContent={"space-between"}
      height={"122px"}
    >
      <ModalGlobal
        open={open}
        header={"Adicionar Projeto"}
        onClose={onClose}
        content={<ProjectForm />}
        footer={
          <Box display={"flex"} gap={2} width={"100%"}>
            <Button variant="contained" type={'submit'} form="project-form">Salvar</Button>
            <Button variant="contained" onClick={() => onClose()}>
              Cancelar
            </Button>
          </Box>
        }
      />
      <Avatar
        alt="Usuário"
        src={"/static"}
        sx={{ height: "122px", width: "122px" }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"56px"}
        >
          <Typography fontSize={"24px"} textTransform={"capitalize"}>
            Camila Soares
          </Typography>
          <Typography>Brasil</Typography>
        </Box>
        <Button variant="contained" size="large" disableElevation onClick={() => setOpen(true)}>
          Adicionar Projeto
        </Button>
      </Box>
    </Box>
  );
}
