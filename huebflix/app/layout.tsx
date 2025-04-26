import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huebflix",
  description: "Entdecke die Welt rund um Huebi!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  );
}
