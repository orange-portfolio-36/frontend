"use client";
import { Project, type Tag } from "@/@types/project";
import { projectService } from "@/services/projectService";
import { tagService } from "@/services/tagService";
import { Autocomplete, Avatar, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import TextField from "../ui/TextField/TextField";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  async function fetchProjects() {
    const { data } = await projectService.getAllProjects();
    console.log(data);
    setProjects(data);
  }

  async function fetchTags() {
    const { data: tags } = await tagService.getTags();
    console.log(tags);
    setTags(tags);
  }

  useEffect(() => {
    fetchProjects();
    fetchTags();
  }, []);
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      marginTop={"120px"}
      flexDirection={"column"}
    >
      <Autocomplete
        sx={{ width: "50%", marginBottom: "40px" }}
        options={tags.map((tag) => ({ label: tag.name, value: tag.id }))}
        renderInput={(params) => (
          <TextField {...params} label={"Buscar tags"} />
        )}
      />
      <Box display={"flex"} flexWrap={"wrap"} gap={2} justifyContent={"center"}>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const { firstName, lastName } = project.User;
  const createdAt = new Date(project.createdAt).toLocaleDateString("pt-br", {
    month: "2-digit",
    year: "2-digit",
  });
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"290px"}
      borderRadius={"4px"}
    >
      <Image
        src={project.url_image}
        alt={"Imagem do projeto"}
        height={258}
        width={369}
      />
      <Box display={"flex"} gap={1}>
        <Avatar sx={{ width: "24px", height: "24px" }} />
        <Typography
          fontSize={"18px"}
        >{`${firstName} ${lastName} • ${createdAt}`}</Typography>
      </Box>
    </Box>
  );
}
