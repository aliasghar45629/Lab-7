import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

function UserProfile() {
  const { loggedIn } = useUser();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      {loggedIn ? (
        <h2>Welcome, {user?.name}</h2>
      ) : (
        <h2>Please login</h2>
      )}
    </div>
  );
}

export default UserProfile;
