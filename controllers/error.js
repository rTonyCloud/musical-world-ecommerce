const router = require("express").Router();

// handle the 404 error
router.use((req, res, next) => {

res.render("main/error", {
    errors: "the page youre looking for does not exist on this server",
    });
});

module.export = router;