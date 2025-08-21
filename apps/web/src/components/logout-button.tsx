"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("You have been signed out successfully.");
      router.push("/login");
    } catch (error: any) {
      toast.error(error?.message || "Failed to sign out");
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      className="text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700"
    >
      Sign Out
    </Button>
  );
}