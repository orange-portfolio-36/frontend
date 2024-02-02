"use client";

import TextField from "@/components/ui/TextField/TextField";
import { Controller, useForm } from "react-hook-form";

export default function SignupForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField label={"Nome"} size="small" {...field} />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField label={"Sobrenome"} size="small" {...field} />
        )}
      />
    </div>
  );
}
