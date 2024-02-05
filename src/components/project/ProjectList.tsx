"use client";
import { Project } from "@/@types/project";
import { projectService } from "@/services/projectService";
import { Avatar, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  async function fetchData() {
    const { data } = await projectService.getAllProjects();
    console.log(data)
    setProjects(data);
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <Box display={"flex"} flexWrap={"wrap"} gap={2} justifyContent={'center'}>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </Box>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const { firstName, lastName } = project.User;
  const createdAt = '12/24'
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"290px"}
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
