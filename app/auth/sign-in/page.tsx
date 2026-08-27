
"use client";

import Link from "next/link";
import { useState } from "react";

import Input from "@/components/ui/Input";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-[1fr_1.1fr]">
        <section className="flex flex-col justify-between bg-secondary px-6 py-8 text-white sm:px-8 lg:px-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Betot</p>
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Sign In</h1>
              <p className="max-w-md text-sm leading-6 text-white/70">
                Continue your study sessions, track progress, and get back to your decks.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/80">Pick up where you left off and keep your learning streak active.</p>
          </div>
        </section>

        <section className="px-6 py-8 sm:px-8 lg:px-10">
          <form className="space-y-5">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-foreground">Email or username</span>
              <Input
                name="identifier"
                type="text"
                placeholder="Enter your email or username"
                autoComplete="username"
              />
            </label>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-foreground">Password</span>
                <Link href="/auth/forgot-password" className="text-sm font-medium text-primary transition-colors hover:opacity-80">
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="pr-24"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute inset-y-0 right-3 my-auto h-fit text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Sign In
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
              Don&apos;t have an account?{" "}
              <Link href="/auth/sign-up" className="font-semibold text-primary transition-colors hover:opacity-80">
                Sign up
              </Link>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
