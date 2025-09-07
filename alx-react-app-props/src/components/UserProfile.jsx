
import React, { useContext } from "react";
import UserContext from "../UserContext"; 
import UserInfo from "./UserInfo";

export default function UserProfile() {
  // استخدم useContext هنا
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>From UserProfile: {userData?.name}</p>
      <UserInfo />
    </div>
  );
}
