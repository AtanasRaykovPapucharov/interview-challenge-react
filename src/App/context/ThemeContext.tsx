/**
 * Theme Context Provider
 * 
 * @param isDark : boolean
 * 
 * @returns ThemeContext.Provider
 * 
 */

import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)
const ThemeUpdateContext = createContext(null)

export const useTheme = () => useContext(ThemeContext)

export const useThemeUpdate = () => useContext(ThemeUpdateContext)

export const ThemeProvider = ({children}: any) => {
    const [isDark, setIsDark] = useState(true)
    const toggleTheme = () => setIsDark(prev => !prev)

    return (
        <ThemeContext.Provider value={isDark}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
