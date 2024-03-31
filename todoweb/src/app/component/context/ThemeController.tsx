"use client";

import { createContext, useEffect, useState } from "react";

type ThemeContextType = {
    theme: string;
    changeTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    changeTheme: () => {}
});

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