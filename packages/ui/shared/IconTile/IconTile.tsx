import * as React from "react";

import styles from "./IconTile.module.css";

export type IconTileProps = {
    title: string;
    description?: string;
    // FIXME: Add logo
    onClick?: () => void;
};

export const IconTile: React.FC<IconTileProps> = ({
    title,
    description,
    onClick,
}) => {
    return (
        // DONE: Add condition that when there is only a description, show paragraph.
        <button className={styles.iconTile} onClick={onClick}>
            <div>
                <div className={styles.logo} />
                <div className={styles.titleContent}>
                    <h2>{title}</h2>
                    {description !== undefined ? description : null}
                </div>
            </div>
        </button>
    );
};
