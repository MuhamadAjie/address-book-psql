// initate express module
const express = require("express");
const app = express();

const router = express.Router();

const {
  create,
  destroy,
  getContact,
  update,
} = require("../controllers/controller");

router.post("/", create);
router.get("/", getContact);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
