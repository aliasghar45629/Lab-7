import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Header />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
