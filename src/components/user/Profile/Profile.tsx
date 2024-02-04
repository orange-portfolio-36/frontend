import Button from "@/components/ui/Button/Button";
import { Avatar, Box, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Box
      data-testid="Profile"
      display={"flex"}
      width={"364px"}
      justifyContent={"space-between"}
      height={"122px"}
    >
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
        <Button variant="contained" size="large" disableElevation>
          Adicionar Projeto
        </Button>
      </Box>
    </Box>
  );
}
