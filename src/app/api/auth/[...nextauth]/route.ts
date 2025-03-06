import NextAuth, { User, Account, Profile } from "next-auth";
import { Session as NextAuthSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import supabase from "../../../utils/supabase";
import { JWT } from "next-auth/jwt";
interface Session extends NextAuthSession {
	data: object | null;
}

interface ExtendedUser extends User {
	data: object | null;
}

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
		}),
	],
	callbacks: {
		async signIn({ user }: { user: ExtendedUser }) {
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
		async jwt({ token, user, account, profile, isNewUser }: { token: JWT, user: ExtendedUser, account: Account, profile: Profile, isNewUser: boolean }) {
			if (user) {
				token.data = user.data;
			}
			return token;
		},
		async session({ session, token }: { session: Session, token: JWT }) {
			session.data = token.data as object | null;
			return { ...session, ...token };
		}
	}
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
