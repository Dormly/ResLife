import { createClient } from "@/app/utils/supabase/server";
import { signInWithGoogle, signOut } from "@/app/utils/database";
import Image from "next/image";

async function AuthButton() {
	const supabase = await createClient();
	const session = await supabase.auth.getUser();

	if (session.data.user) {
		return (
			<>
				<form action={signOut}>
					<button>
						<Image
							className="rounded-full"
							src={session.data.user?.user_metadata.picture ?? ""}
							alt="Profile Picture"
							width={40}
							height={40}></Image>
					</button>
				</form>
			</>
		);
	}
	return (
		<>
			<form action={signInWithGoogle}>
				<button>Sign In</button>
			</form>
		</>
	);
}

export default function ProfileButton() {
	return <AuthButton />;
}
