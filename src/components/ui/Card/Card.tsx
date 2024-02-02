import { ReactNode, RefObject, forwardRef } from "react";
import MuiCard, { CardProps as MuiCardProps } from "@mui/material/Card";

interface CardProps extends MuiCardProps {
  children: ReactNode;
}

type Ref =
  | ((instance: HTMLDivElement | null) => void)
  | RefObject<HTMLDivElement>
  | null
  | undefined;

function Card({ children, ...props }: CardProps, ref: Ref) {
  return (
    <MuiCard ref={ref} {...props}>
      {children}
    </MuiCard>
  );
}

export default forwardRef(Card);
