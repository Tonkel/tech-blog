const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeroutes");
const loginRoutes = require("./login");
const signUpRoutes = require("./sign-up");
const dashboardRoutes = require("./dashboard");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signUpRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
