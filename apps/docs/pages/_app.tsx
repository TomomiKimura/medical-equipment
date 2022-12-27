import React from "react";
import { AppProps } from "next/app";

import "ui/shared/reset.css";
import "ui/shared/global-imports";

export const AdminApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// Used by Next.js
// noinspection JSUnusedGlobalSymbols
export default AdminApp;
