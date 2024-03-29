import type { Metadata } from "next";
import "../globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Providers } from "@/providers/SessionProvider";

export const metadata: Metadata = {
  title: "Sign - Orange Portfólio",
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
          <Box component={"main"} maxWidth={"100%"} height="100%">
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
