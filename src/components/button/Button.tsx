import React from "react";

const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
