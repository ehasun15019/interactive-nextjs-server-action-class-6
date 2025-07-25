"use server";

const { createUser, readUsers } = require("../library/UserList");

export async function addUser(formData) {
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

export const getUsers = async () => {
  const users = await readUsers();

  return users;
};
