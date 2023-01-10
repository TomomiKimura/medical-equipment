import * as React from "react";
import { ReactNode } from "react";

import styles from "./IconCard.module.css";
import { Icon, IconProps } from "./Icon/Icon";

export type IconCardProps = {
  theme: "light" | "dark";
  title: string;
  image:
    | {
        alt: string;
        src: string;
      }
    | IconProps["name"];
  description: string;
};

export const IconCard: React.FC<IconCardProps> = ({ theme, title, image, description }) => {
  const themes = styles[theme];

  let imageContent: ReactNode = undefined;
  if (typeof image === "string") {
    imageContent = (
      <div className={styles.icon}>
        <Icon name={image}></Icon>
      </div>
    );
  } else if (typeof image === "object") {
    // TODO: Change this to Next.js's Image component
    imageContent = <img className={styles.image} width="50" height="50" alt={image.alt} src={image.src} />;
  }

  return (
    <div className={styles.iconCardContainer}>
      <div className={`${styles.iconCard} ${themes}`}>
        <div className={styles.imageContainer}>{imageContent} </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          {description !== undefined ? description : undefined}
        </div>
      </div>
      <div className={`${styles.iconCard} ${themes}`}>
        <div className={styles.imageContainer}>{imageContent} </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          {description !== undefined ? description : undefined}
        </div>
      </div>
      <div className={`${styles.iconCard} ${themes}`}>
        <div className={styles.imageContainer}>{imageContent} </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          {description !== undefined ? description : undefined}
        </div>
      </div>
    </div>
  );
};
