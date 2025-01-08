"use client";

import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-container">
      {children}
    </div>
  )
}

export default Layout;


