"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive &&
              "md:bg-white md:text-primary bg-primary text-white font-semibold rounded-md py-2"
            } flex-center p-medium whitespace-nowrap w-full`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarItems;
