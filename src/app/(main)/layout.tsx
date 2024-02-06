import type { Metadata } from "next";
import "../globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "@/components/ui/Header/Header";
import { Container } from "@mui/material";
import { Providers } from "@/providers/SessionProvider";

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
        <Providers>
          <Header />
          <Container
            maxWidth={"lg"}
            sx={{ height: "calc(100% - 79px)", marginTop: "79px" }}
          >
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
        </Providers>
      </body>
    </html>
  );
}
