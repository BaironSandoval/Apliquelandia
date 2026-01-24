import HeaderDesktop from "@/components/HeaderDesktop";
import "./globals.css";
import Header from "@/components/Header";

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
