const express = require("express");
const router = express.Router();

const {
	findExpensesControllerList,
	findExpensesController,
	createExpensesController,
	changeExpensesController,
	removeExpensesController,
	findExpensesControllerByCategory,
	findExpensesControllerByDate,
} = require("../controller/expenseController");

router.get("/", findExpensesControllerList);
router.get("/:id", findExpensesController);
router.post("/", createExpensesController);
router.patch("/", changeExpensesController);
router.delete("/:id", removeExpensesController);
router.get("/category/category", findExpensesControllerByCategory);
router.get("/date/date", findExpensesControllerByDate);

module.exports = router;
