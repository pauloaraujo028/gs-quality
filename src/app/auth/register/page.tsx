import { RegisterForm } from "@/features/auth/components/register-form";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await auth();

  if (session) redirect("/settings");

  return <RegisterForm />;
};

export default RegisterPage;
