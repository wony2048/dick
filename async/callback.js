"use strict";

// JavaScript is synchronous

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log("hello"));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, OnError) {
        setTimeout(() => {
            if ((id === "ella" && password === "dream") || (id === "coder" && password === "academy")) {
                onSuccess(id);
            } else {
                OnError(new Error("not found"));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, OnError) {
        setTimeout(() => {
            if (user === "ella") {
                onSuccess({ name: "ella", role: "admin" });
            } else {
                OnError(new Error("no access"));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`),
            error => console.log(error)
        );
    },
    error => {
        console.log(error);
    }
);
