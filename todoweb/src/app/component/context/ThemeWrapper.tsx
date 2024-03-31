"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeController";

export default function ThemeWrapper({ children }: any) {
    const {theme} = useContext(ThemeContext);

    return <div data-theme={theme}>{children}</div>

}
