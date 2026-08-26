import { cookies } from "next/headers";

import Navbar from "@/components/Navbar";
import PublicNavbar from "@/components/PublicNavbar";

const AUTH_COOKIE_KEYS = [
  "auth-token",
  "access_token",
  "session",
  "session-token",
  "next-auth.session-token",
  "__Secure-next-auth.session-token",
];

export default async function NavbarSwitcher() {
  const cookieStore = await cookies();
  const isSignedIn = AUTH_COOKIE_KEYS.some((key) => Boolean(cookieStore.get(key)?.value));

  return isSignedIn ? <Navbar /> : <PublicNavbar />;
}
