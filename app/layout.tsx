import type { Metadata } from "next";
import "./globals.css";
import { jostFont } from "./lib/fonts";
import Navbar from "./ui/navigation/navbar";
import StoreProvider from "./StoreProvider";
export const metadata: Metadata = {
  title: "Slim Mom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="min-w-[18.75rem]">
          <div
            className={`${jostFont.className} antialiased  h-[40.5rem] lg:max-w-[80rem] lg:mx-auto  pt-5 lg:pt-20`}
          >
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
