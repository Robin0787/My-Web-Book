import { z } from "zod";

export const createCategoryValidationSchema = z.object({
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name must be a string",
    })
    .refine(
      (name) => !(name.length > 25),
      "Name can't be longer 25 characters!"
    ),
  icon: z.string({
    required_error: "icon is required",
    invalid_type_error: "icon must be a string",
  }),
  canBeDeleted: z.string().optional(),
});
