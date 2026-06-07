import { Inter } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/layout/AppProviders";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "DAVV Blog",
    template: "%s | DAVV Blog",
  },
  description:
    "Campus stories, culture, and student voices from Devi Ahilya Vishwavidyalaya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
