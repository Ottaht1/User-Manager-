import React, { Dispatch, SetStateAction } from "react";
import "./styles.css";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

interface UserDetailsProps {
  user?: User;
  setError: Dispatch<SetStateAction<boolean>>;
}

const UserDetails = ({ user, setError }: UserDetailsProps) => {
  if (!user) {
    return null;
  }

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default UserDetails;
