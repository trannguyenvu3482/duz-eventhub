import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link className="flex-center" href="/">
          <Image
            className="w-20 h-auto"
            src="/assets/images/logoNoText.svg"
            priority
            width="0"
            height="0"
            alt="EventHub"
          />
          <span className="max-md:hidden text-2xl font-bold">EventHub</span>
        </Link>
        <p className="font-semibold">
          Hệ thống quản lý sự kiện hàng đầu Việt Nam EventHub Co. Ltd. © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
