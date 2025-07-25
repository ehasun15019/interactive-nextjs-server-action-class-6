import React from "react";
import { getUsers } from "../../../action/User-action";

const UserList = async () => {
  const gettingUser = await getUsers();

  return (
    <div className="box-secondary mt-20">
      <h2 className="font-bold text-2xl mb-6">USER LIST</h2>

      <div>
        {gettingUser.length > 0 ? (
          gettingUser.map((user, index) => (
            <p key={user.id}>
              {index + 1} : {user.name} , {user.email}
            </p>
          ))
        ) : (
          <p className="text-red-600">Taratari From Fill Up Kor</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
