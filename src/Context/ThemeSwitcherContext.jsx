import { useState } from "react";
import { createContext } from "react";

export const ThemeSwitcher = createContext();



export const ThemeProvider = ({children}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <ThemeSwitcher.Provider value={{ toggle, setToggle }}>
            {children}
        </ThemeSwitcher.Provider>
    )
}