import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavbarItems from "./NavbarItems";

const MobileNavbar = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            className="w-6 h-6 cursor-pointer"
            src="/assets/icons/menu.svg"
            alt="menu"
            width={0}
            height={0}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            className="w-16 h-auto"
            src="/assets/images/logoNoText.svg"
            alt="logo"
            width={0}
            height={0}
          />
          <Separator className="border border-gray-50" />
          <NavbarItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNavbar;
