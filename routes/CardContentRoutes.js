const { Router } = require("express");
const router = Router();

const {
  getAllCardContent,
  addCardContent,
  changeCardContent,
  removeCardContent,
} = require("../controllers/CardContentControllers");

router.get("/", getAllCardContent);
router.post("/add", addCardContent);
router.put("/:id", changeCardContent);
router.delete("/:id", removeCardContent);

module.exports = router;
