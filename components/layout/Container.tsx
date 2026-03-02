import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-300 mx-auto px-5 md:px-10">
      {children}
    </div>
  );
}
