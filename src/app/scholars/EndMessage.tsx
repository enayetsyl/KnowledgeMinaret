import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";

const EndMessage = ({ href }: { href: string }) => {
  return (
    <>
      <hr className="h-[2px] bg-blue-800 mt-3" />
      <div className="flex justify-center gap-5 py-10">
        <Link href={href}>
          <Button
            borderRadius="1rem"
            className="bg-slate-800 dark:bg-slate-900 text-white dark:text-white border-blue-500 dark:border-slate-800"
          >
            Let's Go To Next Page
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EndMessage;
