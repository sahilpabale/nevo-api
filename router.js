// imports
const { Router } = require("express");
const emailVerification = require("./controllers/auth/emailVerification.auth");
const login = require("./controllers/auth/login.auth");
const signup = require("./controllers/auth/signup.auth");

const router = Router();

// controllers
// auth api
router.post("/auth/signup", signup);
router.post("/auth/login", login);
router.get("/auth/verify/:code", emailVerification);

module.exports = router;
