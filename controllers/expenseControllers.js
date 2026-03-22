import Expense from "../models/expense.js";
export default router;
// CREATE
export const addExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    const expense = await Expense.create({
      user: req.user,
      title,
      amount,
      category,
    });

    res.json(expense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
export const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};