import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Cctv } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg background py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Cctv className="text-slate-200" />
        </Link> 
        {session?.user ? (
          <Button onClick={() => signOut()} variant='destructive'>Sign Out</Button>
        ) : (
          <Link className={buttonVariants()} href="/sign-in">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
