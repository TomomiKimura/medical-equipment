import * as React from "react";

// How to apply css module: You import css from inside TS
// You need to import file from a file, in this case, Button.module.css. Since we don't know the final name of button, you cannot use just className="button". it should be dynamic {styles.button}
// So it's creating a variable and passing as a variable {styles.button}
import styles from "./Button.module.css";

export type ButtonProps = {
  children: string;
  onClick?: ()=> void;
};

export const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return <button className={styles.button} onClick={onClick}>{children}</button>;
};