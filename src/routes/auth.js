"use strict";

const express = require("express");
const router = express.Router();
const Authentication = require("../auth");

router.get("/", (request, response) => {
    return response.json({ok: true});
});

router.post("/auth", (request, response) => {
    const body = request.body;
    if (body && body.email && body.password) {
        Authentication.authenticate(body.email, body.password).then(authenticationResponse => {
            return response.json(authenticationResponse);
        }).catch(error => {
            return response.json(error);
        });
    } else {
        return response.send(500);
    }
});

module.exports = router;