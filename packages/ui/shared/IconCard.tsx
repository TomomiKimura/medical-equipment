import * as React from "react";

import styles from "./IconCard.module.css";

export type IconCardProps = {
  theme: "light" | "dark";
  title: string;
  logo: {
    alt: string;
    src: string;
  };
  description: string;
};
// FIXME: Change theme, title, description of each component in each type
export const IconCard: React.FC<IconCardProps> = ({ theme, title, logo, description }) => {
  const themes = styles[theme];
  return (
    <div className={`${styles.iconCard} ${themes}`}>
      <div className={styles.content}>
        <img className={styles.logo} width="50" height="50" alt={logo.alt} src={logo.src} />
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description !== undefined ? description : undefined}</div>
      </div>
      <div className={styles.content}>
        <img className={styles.logo} width="50" height="50" alt={logo.alt} src={logo.src} />
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description !== undefined ? description : undefined}</div>
      </div>
      <div className={styles.content}>
        <img className={styles.logo} width="50" height="50" alt={logo.alt} src={logo.src} />
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description !== undefined ? description : undefined}</div>
      </div>
    </div>
  );
};
