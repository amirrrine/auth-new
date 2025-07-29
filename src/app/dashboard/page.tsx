// src/app/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="container">
      <h1>Welcome to the Dashboard</h1>
    </main>
  );
}
