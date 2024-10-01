import React from "react";
import { ThemeProvider } from "../theme-provider";

export const Layout = ({ children }: { children: React.ReactElement }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    enableSystem
    disableTransitionOnChange
  >
    <div className="relative bg-background" id="layout-container-id">
      {children}
    </div>
  </ThemeProvider>
);

export default Layout;
