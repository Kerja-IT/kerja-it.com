import { type Metadata } from "next";

import { SignedIn, SignedOut } from "@clerk/nextjs";

import { NavBar } from "../_components/navbar";
import { SignedOutModal } from "./_components/signed-out-modal";

export const metadata: Metadata = {
  title: "Post A Job Opening | Kerja IT",
};

export default function PostJobLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavBar />
      <SignedOut>
        <SignedOutModal />
      </SignedOut>
      <SignedIn>{children}</SignedIn>
    </>
  );
}
