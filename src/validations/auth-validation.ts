import z from 'zod';

export const loginSchema = z.object({
  email: z
    .email({ message: 'Please enter a valid email' })
    .min(1, { message: 'Email is required' })
    .nonempty({ message: 'Email is required' }),
  password: z
    .string()
    .min(8, 'Must be at least 8 characters.')
    .nonempty({ message: 'Password is required' }),
});

export type LoginForm = z.infer<typeof loginSchema>;
