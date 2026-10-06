import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { loggedIn, setLoggedIn } = useUser();
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>

      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
}

export default Header;
