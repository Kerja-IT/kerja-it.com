import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

export function NavBar() {
  return (
    <nav className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Kerja IT Logo"
          width={300}
          height={300}
          className="h-10 w-10"
        />
        <p className="text-sm font-semibold">Kerja-IT.com</p>
      </Link>
      <Button variant="outline" asChild>
        <Link href="/post-a-job">Post a Job – Free</Link>
      </Button>
    </nav>
  );
}
