import HeaderDesktop from "@/components/HeaderDesktop";
import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apliquelandia",
  description: "Apliques textiles y personalizados",
  icons: {
    icon: "/logo.svg",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <HeaderDesktop />
        {children}
      </body>
    </html>
  );
}
