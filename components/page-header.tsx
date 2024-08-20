import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import HeaderMenu from "@/components/header-menu";
import Link from "next/link";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-white/5 backdrop-blur-md">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto ">
        <div className="flex h-14 items-center justify-between">
          <h1 className="text-2xl font-bold cursor-pointer">
            <Link href={"/"}>Go Feed</Link>
          </h1>
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="  ml-2">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
