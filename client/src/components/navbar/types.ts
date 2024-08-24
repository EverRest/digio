import React from "react";

export type NavbarProps = {
  theme: Record<string, unknown>;
  onDrawerToggle: React.MouseEventHandler<HTMLElement>;
};
