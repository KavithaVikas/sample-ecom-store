let express = require('express');
let router = express.Router();


router.get('/', function (req, res) {

  res.status(200).send("pong: " + 1);
});
module.exports = router;