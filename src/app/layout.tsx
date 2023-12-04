import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import QueryProvider from "../lib/utils/providers/query";
import { cn } from "../lib/utils/helpers";
import { StateProvider } from "../lib/utils/providers/state";

export const runtime = "edge";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
      <StateProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          {children}
        </body>
      </StateProvider>
    </QueryProvider>
  </html>
);

export default RootLayout;
