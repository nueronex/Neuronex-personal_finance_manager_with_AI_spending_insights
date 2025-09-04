const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  category: String,
  limit: Number,
  period: { type: String, enum: ["monthly", "weekly"] },
});

module.exports = mongoose.model("Budget", budgetSchema);
