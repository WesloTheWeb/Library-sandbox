import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Library Sandbox",
  description: "This is a playground for multiple libraries used. JavaScript React is used for simplicity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
