"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import Input from "@/components/ui/Input";

export default function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitted(true);
	}

	return (
		<main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
			<div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-[1fr_1.1fr]">
				<section className="flex flex-col justify-between bg-secondary px-6 py-8 text-white sm:px-8 lg:px-10">
					<div className="space-y-4">
						<p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Betot</p>
						<div className="space-y-3">
							<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Forgot your password?</h1>
							<p className="max-w-md text-sm leading-6 text-white/70">
								Reset your access and get back to your decks, study sessions, and progress tracking.
							</p>
						</div>
					</div>

					<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
						<p className="text-sm text-white/80">We will send password reset instructions to the email associated with your account.</p>
					</div>
				</section>

				<section className="flex items-center px-6 py-8 sm:px-8 lg:px-10">
					<div className="w-full">
						{submitted ? (
							<div className="space-y-6 rounded-3xl bg-background p-6">
								<div className="space-y-3">
									<h2 className="text-2xl font-bold tracking-tight text-foreground">Check your email</h2>
									<p className="text-sm leading-6 text-muted-foreground">
										If an account exists with that email, we&apos;ve sent instructions to reset your password.
									</p>
								</div>

								<Link
									href="/auth/sign-in"
									className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
								>
									Back to Sign In
								</Link>
							</div>
						) : (
							<form className="space-y-5" onSubmit={handleSubmit}>
								<div className="space-y-3">
									<h2 className="text-2xl font-bold tracking-tight text-foreground">Forgot your password?</h2>
									<p className="text-sm leading-6 text-muted-foreground">
										No worries. Enter your email and we&apos;ll send you a link to reset your password.
									</p>
								</div>

								<label className="block space-y-2">
									<span className="text-sm font-medium text-foreground">Email address</span>
									<Input
										name="email"
										type="email"
										placeholder="Enter your email address"
										autoComplete="email"
										value={email}
										onChange={(event) => setEmail(event.target.value)}
										required
									/>
								</label>

								<button
									type="submit"
									className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
								>
									Send Reset Link
								</button>

								<p className="text-center text-sm text-muted-foreground">
									Remember your password?{" "}
									<Link href="/auth/sign-in" className="font-semibold text-primary transition-colors hover:opacity-80">
										Sign in
									</Link>
								</p>
							</form>
						)}
					</div>
				</section>
			</div>
		</main>
	);
}
