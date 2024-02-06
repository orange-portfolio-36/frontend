import React, { ReactNode, RefObject, forwardRef } from "react";
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";

interface FormFieldProps {
  label: string;
  children?: ReactNode;
}

type InternalProps = MuiTextFieldProps & FormFieldProps;

type Ref =
  | ((instance: HTMLInputElement | null) => void)
  | RefObject<HTMLInputElement>
  | null
  | undefined;

function FormField({ label, children, ...props }: InternalProps, ref: Ref) {
  return (
    <div>
      <label>{label}</label>
      <MuiTextField ref={ref} {...props}>
        {children}
      </MuiTextField>
    </div>
  );
}

export default forwardRef(FormField);
