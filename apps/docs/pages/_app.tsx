import React from "react";
import { AppProps } from "next/app";
import "bootstrap-icons/font/bootstrap-icons.css";

// Add here all global stylesheets
import "ui/shared/variables.css";

export const AdminApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps}>
      <i className="bi bi-0-circle"></i>
    </Component>
  );
};

// Used by Next.js
// noinspection JSUnusedGlobalSymbols
export default AdminApp;
