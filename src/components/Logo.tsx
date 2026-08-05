import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", variant = "dark", size = "md" }: LogoProps) {
  // Variant "dark" means dark text (for light backgrounds like the sticky navbar)
  // Variant "light" means light text (for dark backgrounds like the footer)
  
  const textColorClass = variant === "dark" ? "text-[#1d1b54]" : "text-white";
  const subTextColorClass = variant === "dark" ? "text-[#1d1b54]/90" : "text-white/90";

  // Sizes
  const sizeClasses = {
    sm: {
      svg: "h-8 w-auto",
    },
    md: {
      svg: "h-12 sm:h-14 w-auto",
    },
    lg: {
      svg: "h-16 sm:h-20 w-auto",
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={variant === "light" ? "/logo-light.png" : "/logo.png"} 
        alt="Open World Education" 
        className={`${currentSize.svg} object-contain`} 
      />
    </div>
  );
}
