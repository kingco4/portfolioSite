import { createContext, useContext, useEffect, useState } from 'react'

// Light/dark mode state — exactly two modes. The <html data-theme>
// attribute drives all the CSS (see tokens.css); the choice is
// remembered in localStorage. index.html sets the attribute before
// first paint to avoid a flash.
const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  )

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    // Set the attribute BEFORE React re-renders so components that read
    // CSS variables in effects (hero canvas, project tiles) see the new
    // theme's values — otherwise they repaint with stale colors.
    document.documentElement.dataset.theme = next
    setTheme(next)
  }

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* private browsing — fine, just won't persist */
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
