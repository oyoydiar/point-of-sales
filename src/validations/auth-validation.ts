import z from 'zod';

export const loginSchemaForm = z.object({
  email: z
    .email({ message: 'Please enter a valid email' })
    .min(1, { message: 'Email is required' })
    .nonempty({ message: 'Email is required' }),
  password: z
    .string()
    .min(8, 'Must be at least 8 characters.')
    .nonempty({ message: 'Password is required' }),
});

export const createUserSchema = z.object({
  email: z
    .email({ message: 'Please enter a valid email' })
    .min(1, { message: 'Email is required' })
    .nonempty({ message: 'Email is required' }),
  password: z
    .string()
    .min(8, 'Must be at least 8 characters.')
    .nonempty({ message: 'Password is required' }),
  name: z.string().min(1, { message: 'Name is required' }),
  role: z.string().min(1, { message: 'Role is required' }),
  avatar_url: z.union([
    z.string().min(1, { message: 'Image Url is required' }),
    z.instanceof(File),
  ]),
});

export const updateUserSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  role: z.string().min(1, { message: 'Role is required' }),
  avatar_url: z.union([
    z.string().min(1, { message: 'Image Url is required' }),
    z.instanceof(File),
  ]),
});

export type LoginForm = z.infer<typeof loginSchemaForm>;
export type CreateUserForm = z.infer<typeof createUserSchema>;
export type UpdateUserForm = z.infer<typeof updateUserSchema>;
