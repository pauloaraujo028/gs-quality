"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BackButton } from "@/features/auth/components/back-button";
import { Header } from "@/features/auth/components/header";
interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="w-100 shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref}></BackButton>
      </CardFooter>
    </Card>
  );
};
