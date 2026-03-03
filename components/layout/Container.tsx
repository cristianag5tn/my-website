import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full max-w-7xl 2xl:max-w-360 mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
      {children}
    </div>
  );
}
