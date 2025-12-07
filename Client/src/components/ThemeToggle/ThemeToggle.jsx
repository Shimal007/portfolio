import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./ThemeToggle.css";

export default function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (dark) root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <button
            className="theme-toggle"
            onClick={() => setDark((prev) => !prev)}
            aria-label="Toggle light/dark mode"
        >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
    );
}
