import Link from "next/link";
import React from "react";
import Logout from "./Logout";
import { getSession } from "@/actions";

const Navbar = async () => {
  const session = await getSession();
  console.log("🚀 ~ Navbar ~ session:", session);
  return (
    <nav>
      <Link href="/">Homepage</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      {!session.isLoggedIn && <Link href="/login">Login</Link>}
      {session.isLoggedIn && <Logout />}
    </nav>
  );
};

export default Navbar;
