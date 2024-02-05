import type { Metadata } from "next";
import "../globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "@/components/ui/Header/Header";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Orange Portfólio",
  description:
    "Compartilhe seus projetos e monte o seu portfólio profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <CssBaseline />
      <body>
        <Header />
        <Container maxWidth={"xl"} sx={{ height: "calc(100% - 79px)" }}>
          <Box
            component={"main"}
            maxWidth={"100%"}
            height="100%"
            display={"flex"}
            flexDirection={"column"}
          >
            {children}
          </Box>
        </Container>
      </body>
    </html>
  );
}
