import * as React from "react";

// How to apply css module: You import css from inside TS
// You need to import file from a file, in this case, Button.module.css. Since we don't know the final name of button, you cannot use just className="button". it should be dynamic {styles.button}
// So it's creating a variable and passing as a variable {styles.button}
import styles from "./Button.module.css";

export type ButtonProps = {
  type: "primary" | "secondary" | "subtle" | "destructive";
  children: string;
  onClick?: () => void;
  disabled?: boolean;
};

// TODO: Expose HTML <button> props as well
export const Button: React.FC<ButtonProps> = ({ children, onClick, type, disabled }) => {
  const typeClass = styles[type];

  return (
    <button className={`${styles.button} ${typeClass}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
