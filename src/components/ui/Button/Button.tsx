import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { ReactNode, RefObject, forwardRef } from "react";

interface ButtonProps extends MuiButtonProps {
  chidren?: ReactNode;
}

type Ref =
  | ((instance: HTMLButtonElement | null) => void)
  | RefObject<HTMLButtonElement>
  | null
  | undefined;

function Button({ children, ...props }: ButtonProps, ref: Ref) {
  return (
    <MuiButton ref={ref} {...props}>
      {children}
    </MuiButton>
  );
}

export default forwardRef(Button);
