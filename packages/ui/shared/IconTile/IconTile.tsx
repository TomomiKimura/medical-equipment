import * as React from "react";

import styles from "./IconTile.module.css";

export type ButtonProps = {
    type: "primary";
    children: string;
    onClick?: () => void;
};

export const IconTile: React.FC<ButtonProps> = ({
    children,
    onClick,
    type,
}) => {
    const typeClass = styles[type];

    return (
        <button className={`${styles.iconTile} ${typeClass}`} onClick={onClick}>
            {/*{children}*/}
            <div>
                <div className={`${styles.logo}`} />
                <div className={`${styles.titleContent}`}>
                    <h2>EQUIPMENT</h2>
                    <p>Browse 200+ Systems in Stock</p>
                </div>
            </div>
        </button>
    );
};
