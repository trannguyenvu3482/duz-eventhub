import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileNavbar from "./MobileNavbar";
import NavbarItems from "./NavbarItems";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="max-md:w-20 w-16 flex items-center">
          <Image
            className="w-full h-auto"
            src="/assets/images/logoNoText.svg"
            priority
            width="0"
            height="0"
            alt="EventHub"
          />
          <span className="max-md:hidden text-2xl font-bold">EventHub</span>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavbarItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3 items-center">
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: {
                    width: "40px",
                    height: "40px",
                  },
                },
              }}
            />
            <MobileNavbar />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
