"use strict";

// JavaScript is synchronous

// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((id === "ella" && password === "dream") || (id === "coder" && password === "academy")) {
                    resolve(id);
                } else {
                    reject(new Error("not found"));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resovle, reject) => {
            setTimeout(() => {
                if (user === "ella") {
                    resovle({ name: "ella", role: "admin" });
                } else {
                    reject(new Error("no access"));
                }
            }, 1000);
        });
    }

    async getUserWithRole(id, password) {
        const user = await this.loginUser(id, password);
        const role = await this.getRoles(user);
        return role;
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

// userStorage
//     .loginUser(id, password)
//     .then(userStorage.getRoles)
//     .then(user => alert(`Hello ${user.name}, you have a ${user.role}`))
//     .catch(console.log);
// async function getUserInfo(id, password) {
//     const userId = await userStorage.loginUser(id, password);
//     const userInfo = await userStorage.getRoles(userId);
//     return userInfo.then(user => alert(`Hello ${user.name}, you have a ${user.role}`));
// }

// getUserInfo(id, password).then(console.log).catch(new Error());
userStorage
    .getUserWithRole(id, password) //
    .catch(console.log)
    .then(console.log);
