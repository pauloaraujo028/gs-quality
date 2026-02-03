"use client";

import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "@/features/auth/components/card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "../actions";
import { FormMessageError } from "../components/form-message-error";
import { loginSchema } from "../schemas";

export const LoginForm = () => {
  const searchParams = useSearchParams();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  // const callbackUrl = searchParams.get("callbackUrl");
  const [isPending, startTransition] = useTransition();

  const callbackError = searchParams
    ? searchParams.get("error") === "CredentialsSignin"
      ? "E-mail em uso com provedor diferente"
      : undefined
    : undefined;

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const onSubmit = async (data: z.infer<typeof loginSchema>) => {
  //   setError("");
  //   setSuccess("");

  //   const validatedFields = loginSchema.safeParse(data);

  //   if (!validatedFields.success) {
  //     return { error: "Campos inválidos fornecidos!" };
  //   }

  //   const { email, password } = validatedFields.data;

  //   startTransition(() => {
  //     signIn("credentials", {
  //       email,
  //       password,
  //       callbackUrl: callbackUrl ?? "/dashboard",
  //     }).then((res) => {
  //       if (res?.error) {
  //         setError(res.error);
  //         setSuccess("");
  //       } else {
  //         setSuccess("Login realizado com sucesso");
  //         setError("");
  //       }
  //     });
  //   });
  // };

  // Server action - login - Not working
  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(data).then((res) => {
        if (res.error) {
          setError(res.error);
          setSuccess("");
        }
        if (res.success) {
          setError("");
          setSuccess(res.success);
          setTimeout(() => {
            setSuccess("");
          }, 1000);
        }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Bem vindo de volta"
      backButtonLabel="Não tem uma conta? Cadastre-se"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="email@exemplo.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {callbackError && (
            <FormMessageError
              type="error"
              message={callbackError}
              title="Erro"
              onClearMessage={() => setError("")}
            />
          )}
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Carregando
              </span>
            ) : (
              "Entrar"
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
