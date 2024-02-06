import ProjectList from "@/components/project/ProjectList";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={'100%'}>
      <Typography
        fontSize={"32px"}
        textAlign={"center"}
        marginTop={"112px"}
        width={"744px"}
        fontWeight={"400"}
        lineHeight={"34px"}
      >
        Junte-se à comunidade de inovação, inspiração e descobertas,
        transformando experiências em conexões inesquecíveis
      </Typography>
      <ProjectList />
    </Box>
  );
}
