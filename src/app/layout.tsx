import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title : {
    default : "Home",
    template: "%s | Morada do Sol "
  },
  description: "Morada do Sol Mel Caseiro",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}><Navbar/>{children}<Footer/></body>
    </html>
  );
}
