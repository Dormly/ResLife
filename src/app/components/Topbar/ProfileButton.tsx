import { getUserProfile } from "@/app/utils/supabase/server";
import { signInWithGoogle, signOut } from "@/app/utils/database";
import Image from "next/image";
import assert from "assert";

async function AuthButton() {
	assert(process.env.SITE_URL, "env.SITE_URL is not set");

	const userProfile = await getUserProfile();

	if (userProfile !== null) {
		return (
			<>
				<form action={signOut}>
					<button>
						<Image
							className="rounded-full"
							src={
								userProfile.profile_photo ??
								process.env.SITE_URL + "/defaults/profile_photo_default.svg"
							}
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
