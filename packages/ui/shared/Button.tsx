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

// FIXME: Show proper icon passed down as prop (smile/frown)
// FIXME: Hide icon when no icon is passed
// FIXME: Fix style, alignment and spacing
export const Button: React.FC<ButtonProps> = ({ children, onClick, type, icon }) => {
  const typeClass = styles[type];

  // FIXME: It shows actual string in a place where icon should be displayed right now. That means icon should be boostrap hasn't been properly connected to the value to stories yet?
  return (
    <button className={`${styles.button} ${typeClass}`} onClick={onClick}>
      {children}
      <i className="bi bi-emoji-smile"></i>
      {/*<i className={icon}></i>*/}
      {/*{icon === undefined ? undefined: <i className={icon}></i>}*/}
    </button>
  );
};

// FIXME: Remove
// const Screen = () => {
//   return (
//     <>
//       <Button type="primary" onClick={() => {}} icon={<i className="bi bi-circle-square"></i>}>
//         Ok
//       </Button>
//       <Button type="primary" onClick={() => {}} icon="emoji-frown">
//         Cancel
//       </Button>
//     </>
//   );
// };
