const express = require("express");
const {
  create,
  getAll,
  update,
  destroy,
  findOne,
  deleteAll,
} = require("../controllers/controller.js");

const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:id", findOne);
router.put("/:id", update);
router.delete("/:id", destroy);
router.delete("/", deleteAll);

app.use("/api/tutorials", router);

module.exports = router;
