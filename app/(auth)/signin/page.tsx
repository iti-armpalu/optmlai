// app/(auth)/signin/page.tsx

import Link from "next/link";
import { AuthForm } from "../_components/auth-form";
import { AuthCard } from "../_components/auth-card";


export const metadata = { title: "Sign in" };


export default function Page() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to your account to continue optimizing your content"
      footer={
        <p className="text-sm text-muted-foreground text-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline font-medium">
            Sign up
          </Link>
        </p>
      }
    >
      <AuthForm mode="signin" />
    </AuthCard>
  );
}