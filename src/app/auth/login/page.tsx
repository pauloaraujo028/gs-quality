import { LoginForm } from "@/features/auth/components/login-form";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  if (session) redirect("/settings");

  return <LoginForm />;
};

export default LoginPage;
