const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
  try {
    const transaction = new Transaction({ ...req.body, user: req.user });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user }).sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
