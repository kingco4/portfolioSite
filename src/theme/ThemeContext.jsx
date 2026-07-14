import { createContext, useContext, useEffect, useState } from 'react'

// Light/dark mode state. The <html data-theme> attribute drives all the
// CSS (see tokens.css); the choice is remembered in localStorage.
// index.html sets the attribute before first paint to avoid a flash.
const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'dark'
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* private browsing — fine, just won't persist */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
