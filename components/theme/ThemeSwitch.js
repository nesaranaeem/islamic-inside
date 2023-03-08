import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-12 h-12 text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-12 h-12 text-blue-900"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitch;
