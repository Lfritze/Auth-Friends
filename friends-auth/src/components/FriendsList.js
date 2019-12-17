import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./FriendCard";
import AddFriendForm from "./AddFriendForm";

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
        <div className="add-friend-form">
          <AddFriendForm />
        </div>
        <div className="friend-card-mapped">
          {friends.map((friend, idx) => (
            <FriendCard key={idx} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FriendsList;
