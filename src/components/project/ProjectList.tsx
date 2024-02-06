"use client";
import { Project, type Tag } from "@/@types/project";
import { projectService } from "@/services/projectService";
import { tagService } from "@/services/tagService";
import { Autocomplete, Avatar, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import TextField from "../ui/TextField/TextField";

interface TagOption {
  label: string;
  value: number;
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<TagOption[]>([]);
  const tagsIds = selectedTags.map((item) => item.value);
  const projectList = useMemo(() => {
    const filter = projects.filter((project) =>
      project.ProjectTag.some((item) => tagsIds.includes(item.tagId))
    );
    return tagsIds.length > 0 ? filter : projects;
  }, [selectedTags, projects]);

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
      width={'100%'}
    >
      <Autocomplete
        sx={{ width: "50%", marginBottom: "40px" }}
        options={tags.map((tag) => ({ label: tag.name, value: tag.id }))}
        multiple
        onChange={(_, option) => setSelectedTags(option)}
        renderInput={(params) => (
          <TextField {...params} label={"Buscar tags"} />
        )}
      />
      <Box display={"flex"} flexWrap={"wrap"} gap={2} justifyContent={"space-between"}>
        {projectList.map((project) => (
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
      style={{overflow: 'hidden'}}
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
