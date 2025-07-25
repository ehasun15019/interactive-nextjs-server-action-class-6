// In addUser Function if we get to understand to it is server function then we have to get provide async function. and then the function return by default fromData in parameter. For this reason we have to give in "name" in input field.

import React from "react";
import { createUser } from "../../../library/UserList";

const NewUserFrom = () => {
  // for realize it is server function to use "use server"
  async function addUser(formData) {
    "use server";

    const useData = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    try {
      const user = await createUser(useData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form action={addUser} className="flex flex-col gap-4">
      <div>
        <input
          type="text"
          className="border border-gray-700 rounded px-2 py-3 w-full"
          placeholder="Name"
          name="name"
        />
      </div>

      <div>
        <input
          type="text"
          className="border border-gray-700 rounded px-2 py-3 w-full"
          placeholder="Email"
          name="email"
        />
      </div>

      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-3 py-2 w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewUserFrom;
