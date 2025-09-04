const express = require("express");
const { createBudget, getBudgets } = require("../controllers/budgetController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, createBudget);
router.get("/", auth, getBudgets);

module.exports = router;
