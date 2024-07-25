import { z } from "zod";

export const createWebsiteValidationSchema = z.object({
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name must be a string",
    })
    .refine(
      (name) => !(name.length > 25),
      "Name can't be longer 25 characters!"
    ),
  url: z.string({
    required_error: "url is required",
    invalid_type_error: "url must be a string",
  }),
  rounded: z.string({
    required_error: "rounded is required",
  }),
});
