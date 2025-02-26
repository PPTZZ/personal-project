import type { Metadata } from "next";
import "./globals.css";
import { jostFont } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Slim Mom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jostFont.className} antialiased min-w-[18.75rem]`}>
        {children}
      </body>
    </html>
  );
}
