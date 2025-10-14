
import Link from "next/link";
import { AuthForm } from "../_components/auth-form";
import { AuthCard } from "../_components/auth-card";

export const metadata = { title: "Create account" };


export default function Page() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Start your journey in minutes"
      footer={
        <p className="text-sm text-muted-foreground text-center">
          Already have an account?{" "}
          <Link className="underline underline-offset-4" href="/signin">Sign in</Link>
        </p>
      }
    >
      <AuthForm mode="signup" />
    </AuthCard>
  );
}