"use server";

import wait from "@/wait/wait";
import { revalidatePath } from "next/cache";

const { createUser, readUsers } = require("../library/UserList");

// ai function ansi ami NavbarUserFrom.jsx component
export async function addUser(formData) {
  const useData = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  try {
    const user = await createUser(useData);
    await wait(3000);
    // revalidation path use for server reload
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

// ai function ansi ami UserList.jsx component
export const getUsers = async () => {
  const users = await readUsers();

  return users;
};
