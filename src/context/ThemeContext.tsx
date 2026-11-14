import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ThemeName = "sky" | "sapphire";

interface ThemeCtx {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
  toggle: () => void;
  isSky: boolean;
}

const Ctx = createContext<ThemeCtx>({
  theme: "sky",
  setTheme: () => {},
  toggle: () => {},
  isSky: true,
});

const STORAGE_KEY = "glamour-design-direction";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "sapphire" ? "sapphire" : "sky";
    } catch {
      return "sky";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-anim");
    root.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* private mode — ignore */
    }
    const t = window.setTimeout(() => root.classList.remove("theme-anim"), 900);
    return () => window.clearTimeout(t);
  }, [theme]);

  const setTheme = useCallback((t: ThemeName) => setThemeState(t), []);
  const toggle = useCallback(
    () => setThemeState((p) => (p === "sky" ? "sapphire" : "sky")),
    []
  );

  const value = useMemo<ThemeCtx>(
    () => ({ theme, setTheme, toggle, isSky: theme === "sky" }),
    [theme, setTheme, toggle]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTheme() {
  return useContext(Ctx);
}
