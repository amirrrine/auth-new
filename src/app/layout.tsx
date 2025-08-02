import type { Metadata } from "next";
import "@/app/globals.scss";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "LoginAuth",
  description: "login page with redirect to dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
