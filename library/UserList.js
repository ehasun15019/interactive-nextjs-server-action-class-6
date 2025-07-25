// this code which I write for create user

export const createUser = async (userData) => {
    const res = await fetch("http://localhost:8800/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        }
    });

    const users = await res.json();

    return users;
}



// read-users for showing in the webpage when someone from fill-up
export const readUsers = async (userData) => {
    const res = await fetch("http://localhost:8800/users")

    const users = await res.json();

    return users;
}
