import React, { useEffect, useState } from "react";
import axios from "axios";

function Base() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 1000);
  }, []);

  const pixels = "2px";

  return (
      <div>
    {users.map((user) => 
         (
            <div style={{ border: `${pixels} solid black` }}>
            <div key={user.id} > {user?.id} </div>
            <div> {user?.name} </div>
            <div> {user?.email} </div>
            <div> {user?.username} </div>
          </div>
        ))}
    </div>

      
      
  );
}

export default Base;
