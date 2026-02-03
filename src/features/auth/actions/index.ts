"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/prisma";
import { signIn, signOut } from "@/server/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/server/routes";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { z } from "zod";
import { loginSchema, registerSchema } from "../schemas";

// export const login = async (
//   values: z.infer<typeof loginSchema>,
//   callbackUrl?: string | null // Opcional: para redirecionamento dinâmico se necessário
// ) => {
//   // 1. Validação dos campos de entrada com Zod
//   const validatedFields = loginSchema.safeParse(values);

//   if (!validatedFields.success) {
//     // Retorna erro se a validação do Zod falhar
//     return { error: "Campos inválidos fornecidos!" };
//   }

//   const { email, password } = validatedFields.data;

//   // 2. Busca o usuário pelo email
//   const existingUser = await getUserByEmail(email);

//   // 3. Validação da existência do usuário e da senha
//   // Retorna um erro genérico para não revelar se o email existe ou não
//   if (!existingUser || !existingUser.email || !existingUser.password) {
//     return { error: "Email ou senha incorretos. User" };
//   }

//   // 4. Verificação da senha
//   const passwordsMatch = await bcrypt.compare(password, existingUser.password);

//   // Retorna erro se a senha não corresponder
//   if (!passwordsMatch) {
//     return { error: "Email ou senha incorretos. senha" };
//   }

//   // 5. Tentativa de login com as credenciais validadas
//   try {
//     await signIn("credentials", {
//       email,
//       password,
//       redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT, // Deixa o Auth.js cuidar do redirecionamento
//     });

//     // Se signIn não lançar erro e redirecionar, esta linha pode não ser alcançada.
//     // Se chegar aqui (improvável com redirectTo), significa sucesso sem redirect automático.
//     // Normalmente, o redirect ou um erro são esperados.
//     // Você pode remover o retorno de sucesso explícito se o redirect for garantido.
//     return { success: "Login bem-sucedido!" };
//   } catch (error) {
//     // 6. Tratamento de Erros do Auth.js
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           // Erro lançado pela função 'authorize' se as credenciais forem rejeitadas
//           return { error: "Credenciais inválidas fornecidas." };
//         case "CallbackRouteError":
//           // Erro durante o processamento da rota de callback
//           console.error("Callback Route Error:", error.cause?.err);
//           return { error: "Erro interno durante o login." };
//         default:
//           // Outros erros específicos do Auth.js
//           console.error("Auth Error:", error);
//           return { error: "Algo deu errado durante a autenticação." };
//       }
//     }

//     // 7. Tratamento de Erro de Redirecionamento do Next.js
//     // IMPORTANTE: signIn com redirectTo lança um erro específico para sinalizar o redirect.
//     // Este erro DEVE ser relançado para que o Next.js processe o redirecionamento.
//     // Verifique a documentação do Next.js sobre redirects em Server Actions.
//     // A propriedade pode variar, mas geralmente envolve verificar um tipo ou código específico.
//     // Exemplo genérico (ajuste conforme necessário com base no erro real observado):
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     if ((error as any)?.digest?.startsWith("NEXT_REDIRECT")) {
//       throw error;
//     }

//     // 8. Tratamento de Erros Inesperados
//     console.error("Login Server Action Error:", error); // Log para depuração no servidor
//     return { error: "Ocorreu um erro inesperado. Por favor, tente novamente." };
//   }

//   // Esta parte é geralmente inalcançável devido ao throw/redirect no try/catch
// };

export const login = async (data: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Falha ao fazer login, verifique os dados digitados",
    };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email ou senha incorretos" };
  }

  const passwordMatch = await bcrypt.compare(password, existingUser.password);

  if (!passwordMatch) {
    return { error: "Email ou senha incorretos" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTO: DEFAULT_LOGIN_REDIRECT,
    });

    return {
      success: "Login realizado com sucesso!",
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Email ou senha incorretos",
          };
        case "CallbackRouteError":
          return { error: "Erro interno durante o login." };
        default:
          return {
            error: "Erro ao fazer login, tente novamente mais tarde",
          };
      }
    }

    throw error;
  }

  return {
    error: "Erro ao fazer login, tente novamente mais tarde",
  };
};

export const register = async (data: z.infer<typeof registerSchema>) => {
  try {
    const validatedFields = registerSchema.safeParse(data);

    if (!validatedFields.success) {
      return {
        error: "Falha ao criar a conta, verifique os dados digitados",
      };
    }

    const { firstName, lastName, email, password, confirmPassword, username } =
      validatedFields.data;

    if (password !== confirmPassword) {
      return {
        error: "As senhas não conferem",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return {
        error: "Usuário já existe",
      };
    }

    const lowercaseEmail = email.toLowerCase();

    await db.user.create({
      data: {
        firstName,
        lastName,
        email: lowercaseEmail,
        password: hashedPassword,
        username: username,
      },
    });

    return {
      success: "Cadastro realizado com sucesso",
    };
  } catch {
    return {
      error: "Erro ao cadastrar usuário, tente novamente mais tarde",
    };
  }
};

export const logout = async () => {
  await signOut();
};
