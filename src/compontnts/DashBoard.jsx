// import React from "react";
// import { useGetUsersQuery } from "../redux/features/users/userApiSlice";

// const DashBoard = () => {
//   const {
//     data: users,
//     isLoading,
//     isError,
//     error,
//     isSuccess,
//   } = useGetUsersQuery();
//   console.log(users);
//   return <div>DashBoard</div>;
// };

// export default DashBoard;

import { useGetUsersQuery } from "../redux/features/users/userApiSlice";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function DashBoard() {
  const [token, setToken] = useState(Cookies.get("accessToken"));

  useEffect(() => {
    setToken(Cookies.get("accessToken"));
  }, []); // Or, if your login updates a state, listen to that state

  const {
    data: users,
    isLoading,
    isError,
  } = useGetUsersQuery(undefined, {
    skip: !token, // Skip the query if the token is not available
  });
  if (!token) {
    return <div>Please log in.</div>; // Or some other placeholder
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching users.</div>;
  }

  return (
    <ul>
      {users?.map((user) => (
        <li key={user._id}>{user.first_name}</li>
      ))}
    </ul>
  );
}

export default DashBoard;
