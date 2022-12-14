import * as React from "react";
import { ReactNode } from "react";

import styles from "./IconTile.module.css";

export type IconTileProps = {
  title: string;
  description?: string;
  image?:
    | {
        src: string;
        alt: string;
      }
    | string;

  onClick?: () => void;
};

// FIXME: Can old image which needs alt and src be variable?
export const IconTile: React.FC<IconTileProps> = ({ title, description, onClick, image }) => {
  let imageContent: ReactNode = undefined;
  if (typeof image === "string") {
    imageContent = <i className={`bi bi-${image}`}></i>;
  } else if (typeof image === "object") {
    // TODO: Change this to Next.js's Image component
    imageContent = <img className={styles.logo} width="125" height="125" alt={image.alt} src={image.src} />;
  }

  return (
    <button className={styles.iconTile} onClick={onClick}>
      <div>
        {imageContent}
        <div className={styles.titleContent}>
          <h2>{title}</h2>
          {description !== undefined && <p>{description}</p>}
        </div>
      </div>
    </button>
  );
};
