const express = require("express")
const router = express.Router();

const { findExpensesController } = require("../controller/expenseController")

router.get("/", findExpensesController)

module.exports = router;