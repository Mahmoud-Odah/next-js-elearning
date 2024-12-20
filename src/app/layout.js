import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/app/components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sorbonne",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="container m-auto max-w-screen-xl">{children}</div> */}
        <div className="">{children}</div>
      </body>
    </html>
  );
}
