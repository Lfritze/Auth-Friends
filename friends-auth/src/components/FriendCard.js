import React from "react";

const FriendCard = props => {
  return (
    <div className="friend-card">
      <div className="friend-holder">
        <h1>{props.friend.name}</h1>
        <p>{props.friend.age}</p>
        <p>{props.friend.email}</p>
      </div>
    </div>
  );
};
export default FriendCard;
