"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      router.push("/");
    }
  }, [countdown, router]);

  return (
    <div className="h-[80vh] flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl md:text-7xl font-bold text-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold">Pagina non trovata</h2>
        <p className="text-muted-foreground">
          Reindirizzamento automatico in{" "}
          <span className="font-bold text-primary text-lg">{countdown}</span>{" "}
          secondi
        </p>
        <div className="pt-4">
          <Button asChild>
            <Link href="/">Torna alla Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
