import * as React from "react";

import styles from "./IconCard.module.css";

export type IconCardProps = {
    theme: "light" | "dark";
    title: string;
    //FIXME: Add logo
    description: string;
};

export const IconCard: React.FC<IconCardProps> = ({
    theme,
    title,
    //FIXME: Add logo
    description,
}) => {
    const themes = styles[theme];
    return (
        <div className={`${styles.iconCard} ${themes}`}>
            <div className={styles.content}>
                <div className={styles.logo} />
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>
                    {description !== undefined ? description : undefined}
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.logo} />
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>
                    {description !== undefined ? description : undefined}
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.logo} />
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>
                    {description !== undefined ? description : undefined}
                </div>
            </div>
        </div>
    );
};
