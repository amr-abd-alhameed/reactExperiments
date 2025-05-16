/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  useGetUsersQuery,
  useCreateUserMutation,
} from "../redux/features/users/api/apiSlice";

const Users = () => {
  const [name, setName] = useState("");
  const {
    data: users,
    isError,
    error,
    isLoading,
    isSuccess,
  } = useGetUsersQuery();
  const [createUser] = useCreateUserMutation();
  const addUser = () => {
    createUser(name);
  };
 ;
  return (
    <div>
      {users && (
        <>
          <div>{users.length}</div>
          <div>
            <input
              type="text"
              placeholder="enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => addUser()}>add user</button>
          </div>
          <div>
            {users?.map((user) => (
              <p key={user.id}>{user.name}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Users;
