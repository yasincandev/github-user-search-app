import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import axios from "axios";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const getUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUser(data);
      setErrorText("");
    } catch (error) {
      setErrorText("No Result");
      setUser(null);
      setUsername("");
    }
    setUsername("");
  };

  return (
    <div className={darkMode ? "App AppDark" : "App AppLight"}>
      <div className="container">
        <div className="header__container">
          <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
        </div>
        <div className="main__container">
          <Search
            handleChange={handleChange}
            getUser={getUser}
            darkMode={darkMode}
            value={username}
            user={user}
            errorText={errorText}
          />
          {user && <UserCard user={user} darkMode={darkMode} />}
        </div>
      </div>
    </div>
  );
}

export default App;
