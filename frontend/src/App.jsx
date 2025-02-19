
import React, { useEffect, useState } from "react";
import axios from "axios";
import Leaderboard from "./Leaderboard";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const handleVote = (id) => {
    axios.post(`http://localhost:5000/vote/${id}`)
      .then(response => {
        setUsers(users.map(user => 
          user.id === id ? { ...user, vote: response.data.user.vote } : user
        ));
      })
      .catch(error => console.error("Error voting:", error));
  };

  return <Leaderboard users={users} onVote={handleVote} />;
};

export default App;