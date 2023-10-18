const { findExpensesQuery } = require("../queries/expenseQuery");

const findExpensesService = async () => {
	try {
		const expenses = await findExpensesQuery();
		return expenses;
	} catch (err) {
		console.log(err);
	}
};

module.exports = { findExpensesService };
