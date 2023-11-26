import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Hara",
      image: "https://th.bing.com/th/id/OIG.ey_KYrwhZnirAkSgDhmg",
      places: 3,
    },
  ];
  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
