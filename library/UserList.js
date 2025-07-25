// this code which I write for create user

export const createUser = async (userData) => {
    const res = await fetch("http://localhost:8800/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        }
    });

    const user = await res.json();

    return user;
}