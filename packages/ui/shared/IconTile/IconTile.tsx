import * as React from "react";

import styles from "./IconTile.module.css";

export type IconTileProps = {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  onClick?: () => void;
};

export const IconTile: React.FC<IconTileProps> = ({ title, description, onClick, image }) => {
  return (
    <button className={styles.iconTile} onClick={onClick}>
      <div>
        <img className={styles.logo} width="125" height="125" alt={image.alt} src={image.src} />
        <div className={styles.titleContent}>
          <h2>{title}</h2>
          {description !== undefined ? description : null}
        </div>
      </div>
    </button>
  );
};
