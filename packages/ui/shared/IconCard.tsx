import * as React from "react";
import { ReactNode } from "react";

import styles from "./IconCard.module.css";
import { Icon } from "./Icon";

// FIXME: Merge IconTile component or add type BoostrapIconName to Icon component so that I can use type BoostrapIconName(*check IconTile compoment)

export type IconCardProps = {
  theme: "light" | "dark";
  title: string;
  image:
    | {
        alt: string;
        src: string;
      }
    // FIXME: Change type string to BoostrapIconName
    | string;
  description: string;
};

export const IconCard: React.FC<IconCardProps> = ({ theme, title, image, description }) => {
  const themes = styles[theme];

  let imageContent: ReactNode = undefined;
  if (typeof image === "string") {
    imageContent = <Icon name={image}></Icon>;
  } else if (typeof image === "object") {
    // TODO: Change this to Next.js's Image component
    imageContent = <img className={styles.image} width="125" height="125" alt={image.alt} src={image.src} />;
  }

  return (
    <div className={`${styles.iconCard} ${themes}`}>
      <div className={styles.content}>
        {imageContent}
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description !== undefined ? description : undefined}</div>
      </div>
      <div className={styles.content}>
        {imageContent}
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description !== undefined ? description : undefined}</div>
      </div>
      <div className={styles.content}>
        {imageContent}
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description !== undefined ? description : undefined}</div>
      </div>
    </div>
  );
};
