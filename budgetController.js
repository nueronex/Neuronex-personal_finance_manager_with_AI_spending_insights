const Budget = require("../models/Budget");

exports.createBudget = async (req, res) => {
  try {
    const budget = new Budget({ ...req.body, user: req.user });
    await budget.save();
    res.status(201).json(budget);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.user });
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
