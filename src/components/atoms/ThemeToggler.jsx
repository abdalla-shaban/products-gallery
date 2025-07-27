import { useTheme } from "../../context/Theme/hook";

const ThemeToggler = () => {
  const { toggleTheme } = useTheme();
  return (
    <>
      <button
        onClick={toggleTheme}
        className="rounded-lg p-3  dark:bg-slate-100 dark:text-slate-950 bg-slate-900 text-slate-100"
      >
        Toggle Theme
      </button>
    </>
  );
};

export default ThemeToggler;
