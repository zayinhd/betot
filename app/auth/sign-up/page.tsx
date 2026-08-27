
"use client";

import Link from "next/link";
import { useState } from "react";

import Input from "@/components/ui/Input";

const passwordRules = [
  {
    label: "At least 8 characters",
    test: (value: string) => value.length >= 8,
  },
  {
    label: "One uppercase letter",
    test: (value: string) => /[A-Z]/.test(value),
  },
  {
    label: "One number",
    test: (value: string) => /\d/.test(value),
  },
  {
    label: "One special character",
    test: (value: string) => /[^A-Za-z0-9]/.test(value),
  },
];

export default function SignUp() {
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-[1fr_1.1fr]">
        <section className="flex flex-col justify-between bg-secondary px-6 py-8 text-white sm:px-8 lg:px-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Betot</p>
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Sign Up</h1>
              <p className="text-base text-white/80">Create your Betot account</p>
              <p className="max-w-md text-sm leading-6 text-white/70">
                Start building better study habits today.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/80">Build consistent routines, organize your decks, and keep your progress in one place.</p>
          </div>
        </section>

        <section className="px-6 py-8 sm:px-8 lg:px-10">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground">Full name</span>
                <Input name="fullName" placeholder="Enter your full name" autoComplete="name" />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground">Username</span>
                <Input name="username" placeholder="Choose a username" autoComplete="username" />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-foreground">Email</span>
              <Input name="email" type="email" placeholder="Enter your email" autoComplete="email" />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground">Password</span>
                <Input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-foreground">Confirm password</span>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                />
              </label>
            </div>

            <div className="rounded-2xl bg-background p-4">
              <p className="text-sm font-medium text-foreground">Password requirements</p>
              <ul className="mt-3 space-y-2 text-sm">
                {passwordRules.map((rule) => {
                  const isMet = password.length > 0 && rule.test(password);

                  return (
                    <li key={rule.label} className="flex items-center gap-3">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          isMet ? "bg-success" : "bg-border"
                        }`}
                      />
                      <span className={isMet ? "text-foreground" : "text-muted-foreground"}>{rule.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <button className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Create Account
            </button>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="rounded-2xl border border-dashed border-border bg-background px-4 py-6 text-center text-sm text-muted-foreground">
              Social login will go here later.
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/sign-in" className="font-semibold text-primary transition-colors hover:opacity-80">
                Sign in
              </Link>
            </p>

            <p className="text-center text-xs leading-6 text-muted-foreground">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="font-medium text-foreground transition-colors hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-medium text-foreground transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
