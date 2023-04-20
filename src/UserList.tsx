import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import "./styles.css";
import UserDetails from "./UserDetails";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

interface UserListProps {
  setError: Dispatch<SetStateAction<boolean>>;
  handleUserClick: (user: User) => void;
  selectedUser?: User;
}

const UserList = ({ setError }: UserListProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch (e) {
      setError(true); // call the setError function with a boolean value
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleUserClick = (user: User) => {
    if (selectedUser?.id === user.id) {
      // If the same user is clicked, deselect them
      setSelectedUser(undefined);
    } else {
      setSelectedUser(user);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => handleUserClick(user)}>{user.name}</button>
            {selectedUser?.id === user.id && (
              <UserDetails user={selectedUser} setError={setError} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
