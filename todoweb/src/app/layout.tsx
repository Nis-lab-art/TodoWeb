import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "./component/context/ThemeWrapper";
import { ThemeController } from "./component/context/ThemeController";
import Navbar from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple TodoWeb",
  description: "Simplet todo web for learning next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeController>
        <div className="text-2xl">
            <ThemeWrapper>
              <Navbar />
              {children}
            </ThemeWrapper>
        </div> 
        </ThemeController>
      </body>
    </html>
  );
}
