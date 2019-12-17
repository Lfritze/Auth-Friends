import React, { useState, useEffect } from "react";
import { axiosWithAUth, axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./FriendCard";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => setFriends(res.data))
      .catch(error =>
        console.log("FriendsList.js axiosWithAuth error", error.res)
      );
  });
  return (
    <div className="list-container">
      <div className="friends-list-container">
        <div className="add-friend-form">add friend form here</div>
        <div className="friend-card-mapped">
          {friends.map((friend, idx) => (
            <friendCard key={idx} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FriendsList;
