"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { ButtonsCardProps } from "@/type/type";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: ButtonsCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        " rounded-xl  dark:bg-black  group/btn overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
  
      <div className="relative z-40">{children}</div>
    </div>
  );
};
