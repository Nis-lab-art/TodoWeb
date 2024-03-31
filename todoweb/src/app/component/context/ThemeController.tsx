"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeController = ({children}: any) => {
   const[theme, setTheme] = useState("light");
   const[mounted, setMounted] = useState(false);

   useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
   }, []);

    if(!mounted) {
        return<>Loading...</>
    }

    const changeTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}