import { useState, useEffect } from "react";
import axios from "../api/axios";
import useRefreshToken from "../hook/useRefreshToken";
// import { Axios } from "axios";

const User = () => {
  const [users, setUsers] = useState();
  const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = await axios.get("/users", {
          signal: controller.signal,
        });
        console.log("response data from user component", response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>
        Users list
        {users?.length ? (
          <ul>
            {users.map((user, i) => (
              <li key={i}>{user?.username}</li>
            ))}
          </ul>
        ) : (
          <p>No users to display</p>
        )}
      </h2>
      <button onClick={() => refresh()}>Refresh</button>
    </article>
  );
};

export default User;
