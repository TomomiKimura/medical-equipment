import * as React from "react";
import type { BootstrapIconName } from "./bootstrap-icons";

export type IconProps = {
  name: BootstrapIconName;
};

export const Icon: React.FC<IconProps> = ({ name }) => {
  return <i className={`bi bi-${name}`}></i>;
};
