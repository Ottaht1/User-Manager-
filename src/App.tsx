import React, { useState } from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import "./styles.css";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

export default function App() {
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [error, setError] = useState(false);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="App">
      <div className="container">
        <UserList
          setError={setError}
          handleUserClick={handleUserClick}
          selectedUser={selectedUser}
        />
        {selectedUser && (
          <UserDetails user={selectedUser} setError={setError} />
        )}
      </div>
    </div>
  );
}
