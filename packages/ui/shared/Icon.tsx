import * as React from "react";
import "./global-imports";

export type IconProps = {
  icon: string;
};

export const Icon: React.FC<IconProps> = ({ icon }) => {
  return <i className={`bi bi-${icon}`}></i>;
};
