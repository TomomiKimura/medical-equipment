import * as React from "react";
import { ReactNode } from "react";
import { Icon, IconProps } from "../Icon/Icon";

import styles from "./IconTile.module.css";

export type IconTileProps = {
  title: string;
  description?: string;
  /**
   * This prop can receive either an image (providing an object with a src/alt) or an icon (providing a BootstrapIconName)
   */
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
    imageContent = (
      <div className={styles.icon}>
        <Icon name={image}></Icon>
      </div>
    );
  } else if (typeof image === "object") {
    // TODO: Change this to Next.js's Image component
    imageContent = (
      <div className={styles.image}>
        <img className={styles.image} width="125" height="125" alt={image.alt} src={image.src} />
      </div>
    );
  }

  return (
    <div className={styles.iconTile} onClick={onClick}>
      <div className={styles.imageContainer}>{imageContent}</div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        {description !== undefined && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};
