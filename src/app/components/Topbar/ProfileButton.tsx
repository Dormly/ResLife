"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function AuthButton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<button onClick={() => signOut()}>
					<Image
						className="rounded-full"
						src={session?.user?.image ?? ""}
						alt="Profile Picture"
						width={48}
						height={48}
					></Image>
				</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	);
}

export default function ProfileButton() {
	return <AuthButton />;
}
