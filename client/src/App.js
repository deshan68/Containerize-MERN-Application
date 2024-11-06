import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Users List</h2>
      {users.length > 0 ? (
        <div
          style={{
            listStyle: "none",
            width: "fit-content",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {users.map((user) => (
            <div
              style={{
                borderRadius: "5px",
                backgroundColor: "GrayText",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
              key={user._id}
            >
              <span>Name: {user.name}</span>
              <span>Age: {user.age}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>No users found...</p>
      )}
    </>
  );
}

export default App;
