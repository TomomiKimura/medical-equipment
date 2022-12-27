import React from "react";
import { AppProps } from "next/app";

import "ui/shared/reset.css";
import "ui/shared/global-imports";

export const WebApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// Used by Next.js
// noinspection JSUnusedGlobalSymbols
export default WebApp;
