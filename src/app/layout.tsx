import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "../lib/utils/providers/query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyPocket",
  description: "MyPocket - GetPocket but better!",
  icons: [
    { rel: "icon", url: "https://fav.farm/🔖" },
    { rel: "apple-touch-icon", url: "https://fav.farm/🔖" },
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <QueryProvider>
      <body className={inter.className}>{children}</body>
    </QueryProvider>
  </html>
);

export default RootLayout;
