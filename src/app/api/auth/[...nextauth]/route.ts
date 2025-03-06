import NextAuth, { Session, User, Account, Profile } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import supabase from "../../../utils/supabase";

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
		}),
	],
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60,
	},
	callbacks: {
		async signIn({ user }: { user: { email?: string | null; name?: string | null; image?: string | null; data?: object | null } }) {
			let { data: userData } = await supabase
				.from("users")
				.select("id,email,name,profile,university_id(id, name)")
				.eq("email", user.email == null ? "" : user.email)
				.single();
		
			if (userData === null) {
				console.log("User not found in DB, creating new user");
				({ data: userData } = await supabase
					.from("users")
					.insert([
						{
							email: user.email || "",
							name: user.name || "",
							profile: user.image || "",
							university_id: 1,
						},
					])
					.select("id,email,name,profile,university_id(id, name)")
					.single());
			}

			user.data = userData;
			return true;
		},
		async jwt({ token, user, account, profile, isNewUser }: { token: Token, user: User, account: Account, profile: Profile, isNewUser: boolean }) {
			if (user) {
				token.data = user.data;
			}
			console.log(token);
			return token;
		},
		async session({ session, token }: { session: Session, token: Token }) {
			session.data = token.userData
			return session;
		}
	}
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
