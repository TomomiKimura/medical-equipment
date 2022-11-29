import * as React from "react";

// How to apply css module: You import css from inside TS
// You need to import file from a file, in this case, Button.module.css. Since we don't know the final name of button, you cannot use just className="button". it should be dynamic {styles.button}
// So it's creating a variable and passing as a variable {styles.button}
import styles from "./Button.module.css";
import "./global-imports";

export type ButtonProps = {
  type: "primary" | "secondary" | "destructive";
  children: string;
  onClick?: () => void;
  icon?: string;
};

// DONE: Show proper icon passed down as prop (smile/frown)
// DONE: Hide icon when no icon is passed
// DONE: Fix style, alignment and spacing
// FIXME: Allow icon on the right and on the left or both or none
// FIXME: Make text optional
export const Button: React.FC<ButtonProps> = ({ children, onClick, type, icon }) => {
  const typeClass = styles[type];

  return (
    <button className={`${styles.button} ${typeClass}`} onClick={onClick}>
      {children}
      {icon !== undefined ? <i className={`bi bi-${icon}`}></i> : undefined}
    </button>
  );
};

// <name attributes1="string values" attribute2={dynamicValues} attribute3={12} isValid></name>
