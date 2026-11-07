"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { hasCompletedIntroInThisAppSession } from "./intro-navigation";

export default function HomeRefreshIntro() {
  const router = useRouter();

  useEffect(() => {
    // The module flag survives client-side route changes but resets on a
    // full document reload. This reliably distinguishes an in-app return
    // to Home from a fresh load/refresh of /home.
    if (!hasCompletedIntroInThisAppSession()) {
      router.replace("/");
    }
  }, [router]);

  return null;
}
