import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KBFC - Karibbean Bully Fanatics Club",
  description: "Plateforme officielle du KBFC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
