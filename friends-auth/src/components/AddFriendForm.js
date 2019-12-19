import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriendForm = () => {
  const [addFriends, setAddFriends] = useState({
    name: "",
    age: "",
    email: ""
  });

  const submitHandler = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/friends", addFriends)
      .then(res => setAddFriends(res.data))
      .catch(error =>
        console.log(
          "post friends error in AddFriendForm.js axiosWithAuth",
          error.res
        )
      );
    document.getElementById("input-name").reset();
  };
  const inputHandler = event => {
    setAddFriends({ ...addFriends, [event.target.name]: event.target.value });
  };
  return (
    <div className="add-friend-form">
      <h1 className="add-friend-title">Add Friends</h1>
      <form className="input-name" id="input-name" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          label="name"
          placeholder="Name"
          value={addFriends.name}
          onChange={inputHandler}
          className="friend-input"
        />
        <input
          type="age"
          name="age"
          label="age"
          placeholder="Age"
          value={addFriends.age}
          onChange={inputHandler}
          className="friend-input"
        />
        <input
          type="text"
          name="email"
          label="email"
          placeholder="Email"
          value={addFriends.email}
          onChange={inputHandler}
          className="friend-input"
        />
        <button className="add-friends-button">Add Friends</button>
      </form>
    </div>
  );
};
export default AddFriendForm;
