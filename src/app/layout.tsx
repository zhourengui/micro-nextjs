import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RecoildContextProvider } from "@/src/micro-app/components/recoid-context-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoildContextProvider>{children}</RecoildContextProvider>
      </body>
    </html>
  );
}