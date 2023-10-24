const router = require("express").Router();

router.get("/", (req, res) => {
  //If a session doesnt exist, redirect the request to the login page
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  res.render("dashboard");
});

module.exports = router;
