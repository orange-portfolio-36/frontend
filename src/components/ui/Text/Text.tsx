import Typography, { TypographyProps } from "@mui/material/Typography";

interface TextProps extends TypographyProps {}

export default function Text({ ...props }: TextProps) {
  return <Typography {...props} />;
}
