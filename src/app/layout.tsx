import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";
/**
 * Returns the Sidebar and navbar component
 */
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventory Manager",
  description: "This application is used to assist with inventory management needs.",
  applicationName:"Inventory Manager",
  authors:[{"name":"Vince Dority"}],
  keywords:["stock management application","inventory manager","inventory application","inventory app"]

  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <DashboardWrapper>
          {children}
          </DashboardWrapper>
        </body>
    </html>
  );
}
