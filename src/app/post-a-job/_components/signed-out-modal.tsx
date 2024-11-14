"use client";
import React, { useState } from "react";

import { useSignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SignedOutModal() {
  const [loading, setLoading] = useState(false);
  const { signIn } = useSignIn();
  if (!signIn) return null;

  return (
    <div className="absolute top-0 -z-10 mx-auto flex h-dvh w-full items-center justify-center px-4">
      <div className="flex max-w-md flex-col gap-6 rounded-lg border p-4 shadow-lg sm:p-8">
        <h1 className="text-2xl font-medium">
          Sign in to helps us filter spams!
        </h1>
        <div className="flex flex-col gap-2">
          <p>
            Signing in helps us keep spam at bay. After logged in, you can
            easily post job listings for free.
          </p>
          <p>Thank you for helping us maintain a trustworthy job board!</p>
        </div>
        <Button
          disabled={loading}
          onClick={() => {
            setLoading(true);
            signIn.authenticateWithRedirect({
              strategy: "oauth_google",
              redirectUrl: "/sign-up/sso-callback",
              redirectUrlComplete: "/post-a-job",
            });
          }}
        >
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Google</title>
              <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              />
            </svg>
          )}
          <span>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
}
