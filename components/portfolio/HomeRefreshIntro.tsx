"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomeRefreshIntro() {
  const router = useRouter();

  useEffect(() => {
    const navigation = window.performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;

    // A full browser refresh on /home should replay the intro. Normal
    // in-app navigation to Home should remain immediate.
    if (navigation?.type === "reload") {
      router.replace("/");
    }
  }, [router]);

  return null;
}
