import css from "./Layout.module.css";
import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <main className={css.container}>{children}</main>;
}