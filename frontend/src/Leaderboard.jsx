
import React from "react";
import { FaCrown } from "react-icons/fa";
import HeartButton from "./heart";

const Leaderboard = ({ users, onVote }) => {
  const sortedUsers = [...users].sort((a, b) => b.vote - a.vote);

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      
      <div className="leaderboard-header">
        {sortedUsers.slice(0, 5).map((user) => (
          <div key={user.id} className="leaderboard-top-user">
            <img src={user.image.link || "https://via.placeholder.com/100"} 
                 className="top-user-avatar" 
                 alt={user.displayname} 
            />
            {user.vote > 0 && <FaCrown className="top-user-crown" />}
          </div>
        ))}
      </div>

      <div className="leaderboard-grid">
        {sortedUsers.map((user) => (
          <div key={user.id} className="leaderboard-user-card">
            <div className="user-rank">hepled {user.vote} people</div>
            <img src={user.image.link || "https://via.placeholder.com/100"} 
                 alt={user.displayname} 
                 className="user-avatar" 
            />
            <p className="user-name">{user.displayname}</p>
			<HeartButton onVote={onVote} userId={user.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;

