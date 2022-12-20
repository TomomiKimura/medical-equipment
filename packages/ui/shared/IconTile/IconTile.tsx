import * as React from "react";
import { ReactNode } from "react";
import { Icon, IconProps } from "../Icon/Icon";

import styles from "./IconTile.module.css";

export type IconTileProps = {
  title: string;
  description?: string;
  image?:
    | {
        src: string;
        alt: string;
      }
    | IconProps["name"];

  onClick?: () => void;
};

export const IconTile: React.FC<IconTileProps> = ({ title, description, onClick, image }) => {
  let imageContent: ReactNode = undefined;
  if (typeof image === "string") {
    imageContent = <Icon name={image}></Icon>;
  } else if (typeof image === "object") {
    // TODO: Change this to Next.js's Image component
    imageContent = <img className={styles.logo} width="125" height="125" alt={image.alt} src={image.src} />;
  }

  return (
    <button className={styles.iconTile} onClick={onClick}>
      <div>
        <div className={styles.image}>{imageContent}</div>
        <div className={styles.titleContent}>
          <h2>{title}</h2>
          {description !== undefined && <p>{description}</p>}
        </div>
      </div>
    </button>
  );
};
