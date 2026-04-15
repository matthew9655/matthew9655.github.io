import Options from "../options";
import ThemeToggle from "./themeToggle";
import "./header.css";

export default function Header() {
  return (
    <div id="main-header">
      <div id="header-left-spacer" aria-hidden="true" />
      <div id="header-center">
        <Options />
      </div>
      <div id="theme-toggle-slot">
        <ThemeToggle />
      </div>
    </div>
  );
}
