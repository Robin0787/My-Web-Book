/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "@/components/ui/form";
import { ReactNode } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface TPHFormProps {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  defaultValues?: object;
  resolver?: any;
}

interface TFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

const MyForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TPHFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const form = useForm(formConfig);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default MyForm;
