'use client';

import FormInput from '@/components/commons/form-input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { INITIAL_LOGIN_FORM } from '@/constants/auth-constant';
import { LoginForm, loginSchema } from '@/validations/auth-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: INITIAL_LOGIN_FORM,
  });

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data);
  });
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome</CardTitle>
        <CardDescription>Login to access all features</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-4">
            <FormInput
              form={form}
              type="email"
              name="email"
              label="Email"
              placeholder="Insert email here"
            />
            <FormInput
              form={form}
              type="password"
              name="password"
              label="Password"
              placeholder="********"
            />
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
