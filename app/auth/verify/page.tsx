"use client";

import { useEffect, useState } from "react";

const RESEND_COOLDOWN_SECONDS = 45;

export default function VerifyPage() {
	const [countdown, setCountdown] = useState(0);

	useEffect(() => {
		if (countdown <= 0) {
			return;
		}

		const timer = window.setInterval(() => {
			setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);

		return () => {
			window.clearInterval(timer);
		};
	}, [countdown]);

	const handleResend = () => {
		if (countdown > 0) {
			return;
		}

		// Placeholder for resend request.
		setCountdown(RESEND_COOLDOWN_SECONDS);
	};

	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="mx-auto flex w-full max-w-2xl items-center px-4 py-16 sm:px-6 lg:px-8">
				<section className="w-full rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
					<h1 className="text-3xl font-bold tracking-tight">Check your email 📩</h1>

					<p className="mt-4 text-sm text-muted-foreground sm:text-base">
						We&apos;ve sent a verification link to <strong>user@example.com</strong>. Click the link
						in the email to verify your Betot account.
					</p>

					<div className="mt-8 flex flex-col gap-3">
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
						>
							I&apos;ve verified my email
						</button>

						<button
							type="button"
							onClick={handleResend}
							disabled={countdown > 0}
							className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
						>
							Resend verification email
						</button>
					</div>

					<div className="mt-6 rounded-xl border border-border bg-background p-4 text-sm text-muted-foreground">
						<p className="font-medium text-foreground">Didn&apos;t receive it?</p>
						<p className="mt-1">Check your spam folder or try sending the email again.</p>
					</div>

					{countdown > 0 && (
						<p className="mt-4 text-sm font-medium text-muted-foreground" aria-live="polite">
							Resend available in {countdown} seconds
						</p>
					)}
				</section>
			</div>
		</main>
	);
}
