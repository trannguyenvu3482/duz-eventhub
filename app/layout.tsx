import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EventHub - Nền tảng tổ chức sự kiện hàng đầu Việt Nam",
  description:
    "EventHub là một nền tảng tổ chức sự kiện, hội thảo, hội nghị hàng đầu Việt Nam. Với EventHub, bạn có thể tổ chức sự kiện của mình một cách dễ dàng và hiệu quả nhất.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
