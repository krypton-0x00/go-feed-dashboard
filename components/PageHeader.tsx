import {
  SignInButton,
  SignedIn,
  SignUpButton,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto">
        <div className="flex h-14 items-center justify-between">
          <h1 className="text-2xl font-semibold ">GO FEED</h1>
          <div>
            <SignedOut>
              <SignInButton>
                <button className="bg-black mx-2 text-white px-3 py-1 rounded-sm ">
                  Sign In
                </button>
              </SignInButton>
              <SignOutButton>
                <button className="bg-black text-white px-3 py-1 rounded-sm ">
                  Sign Up
                </button>
              </SignOutButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
