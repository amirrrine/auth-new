import type { Metadata } from "next";
import "@/app/globals.scss";

export const metadata: Metadata = {
  title: "Login Auth App",
  description: "Simple login page with redirect to dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
