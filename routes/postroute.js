const router = require("express").Router();
const postcontrollers = require("../controllers/postcontroller.js");
router.route("/posts/create").post(postcontrollers.createpost);
router.route("/posts/download").get(postcontrollers.download);
module.exports = router;
