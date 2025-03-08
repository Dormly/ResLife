"use client";
import { signInWithGoogle } from "@/app/utils/database";

// This form uses the PKCE flow so we can use server side rendering.
import React from "react";

export default function AuthForm() {
	return (
		<div>
			<form>
				<button
					type="button"
					onClick={() => signInWithGoogle()}
					className="btn">
					Sign in with Google
				</button>
			</form>
		</div>
	);
}
