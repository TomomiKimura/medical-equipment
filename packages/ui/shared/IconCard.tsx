import * as React from "react";

import styles from "./IconCard.module.css";

export type IconCardProps = {
    title: string;
    //FIXME: Add logo
    description: string;
};

//FIXME: Fix modules.css so that it doesn't use padding-left for description
export const IconCard: React.FC<IconCardProps> = ({ title, description }) => {
    return (
        <div className={styles.iconCard}>
            <div className={styles.iconCardContent}>
                <div className={styles.logo} />
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>
                    {description !== undefined ? description : undefined}
                </div>
            </div>
            <div className={styles.iconCardContent}>
                <div className={styles.logo} />
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>
                    {description !== undefined ? description : undefined}
                </div>
            </div>
            <div className={styles.iconCardContent}>
                <div className={styles.logo} />
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>
                    {description !== undefined ? description : undefined}
                </div>
            </div>
        </div>
    );
};
