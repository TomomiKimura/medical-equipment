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
// DONE: Add Story to test icon, commit and push
// FIXME: Style icon size properly
// TODO: Create a issue/ticket for iconComponent (Github - e.g. #8)
// TODO: Create Icon component (branch should be from main: feature/8-iconComponent)
// TODO: Push commits and make PR in Github for review
// TODO: Switch to feature/4-iconTile and merge feature/8-iconComponent into it (so that Icon component is available here)
// TODO: Make the changes to use <Icon />, commit and push
// TODO: Create a PR for feature/4-iconTile
// TODO: Add icon to other components
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
        <div className={styles.image}>{imageContent}</div>
        <div className={styles.titleContent}>
          <h2>{title}</h2>
          {description !== undefined && <p>{description}</p>}
        </div>
      </div>
    </button>
  );
};
