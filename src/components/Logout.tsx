import { logout } from "@/actions";
import React from "react";

const Logout = () => {
  return (
    <form action={logout}>
      <button>Logout</button>
    </form>
  );
};

export default Logout;
