import React from "react";
import { AppProps } from "next/app";

// Add here all global stylesheets
import "ui/shared/variables.css";

export const AdminApp: React.FC<AppProps>= ({Component, pageProps}) => {
  return <Component {...pageProps}/>;
};

// Used by Next.js
// noinspection JSUnusedGlobalSymbols
export default AdminApp;
