import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HuSecurity Camera WebApp",
  description:
    "HuSecurity's camera's webapp, used to view all login and monitor camera's added to account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <main className="h-screen flex flex-col justify-center items-center color background">
          <Navbar />
          {children}
        </main>
        <Toaster />

        </Provider>
      </body>
    </html>
  );
}
