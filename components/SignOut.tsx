"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function LogoutForm() {
  return <Button onClick={() => signOut()}>Sign out</Button>;
}
