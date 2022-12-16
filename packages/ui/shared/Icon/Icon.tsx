import * as React from "react";

export type IconProps = {
  name: string;
};

export const Icon: React.FC<IconProps> = ({ name }) => {
  return <i className={`bi bi-${name}`}></i>;
};
