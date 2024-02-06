"use client";

import { Project, ProjectForm } from "@/@types/project";
import { useTags } from "@/hooks/useTags";
import { Collections } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export default function ProjectForm({ project }: { project?: Project }) {
  const { control, handleSubmit } = useForm<ProjectForm>({
    defaultValues: {
      ...project,
    },
  });

  const { setSelectedTags, tags, tagsIds } = useTags();

  function onSubmit(data: ProjectForm) {
    console.log("tags", tagsIds);
    console.log(data);
  }

  function renderInput(name: keyof ProjectForm, fieldProps: TextFieldProps) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => <TextField {...fieldProps} {...field} />}
      />
    );
  }
  return (
    <form
    id={'project-form'}
      style={{ display: "flex", width: "100%", gap: 4, height: "336px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        width={"50%"}
        height={"100%"}
      >
        <Typography fontSize={"16px"}>
          Selecione o conteúdo que você deseja fazer upload
        </Typography>
        <Box
          display={"flex"}
          borderRadius={"4px"}
          sx={{ backgroundColor: "#E6E9F2", cursor: "pointer" }}
          height={"100%"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          <Box
            width={"270px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Collections fontSize="large" />
            <Typography fontSize={"14px"} sx={{ opacity: 0.6 }}>
              Compartilhe seu talento com milhares de pessoas
            </Typography>
          </Box>
          <input
            type="file"
            style={{
              position: "absolute",
              opacity: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        width={"50%"}
        height={"100%"}
      >
        {renderInput("name", { label: "Título", fullWidth: true })}
        <Autocomplete
          sx={{ width: "100%" }}
          options={tags.map((tag) => ({ label: tag.name, value: tag.id }))}
          multiple
          onChange={(_, option) => setSelectedTags(option)}
          renderInput={(params) => <TextField {...params} label={"Tags"} />}
        />
        {renderInput("url_project", { fullWidth: true, label: 'Link' })}
        {renderInput("description", { fullWidth: true, multiline: true, rows: 3, label: 'Descrição' })}
      </Box>
    </form>
  );
}
