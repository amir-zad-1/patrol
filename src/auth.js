"use strict";

module.exports.authenticate = (email, password) => {
    return new Promise((resolve, reject) => {
        if (email === "test@domain.com" && password === "pwd") {
            resolve({ok: true});
        } else {
            reject({ok: false});
        }
    });

};