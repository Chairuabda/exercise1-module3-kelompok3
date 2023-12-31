const {
	findExpensesQueryList,
	findExpensesQuery,
	createExpensesQuery,
	changeExpensesQuery,
	removeExpensesQuery,
	findExpensesQueryByDate,
	// findExpensesQueryByCategory,
} = require("../queries/expenseQuery");

const findExpensesServiceList = async () => {
	try {
		const expenses = await findExpensesQueryList();
		return expenses;
	} catch (err) {
		console.log(err);
	}
};
const findExpensesService = async (id) => {
	try {
		const expenses = await findExpensesQuery(id);
		return expenses;
	} catch (err) {
		console.log(err);
	}
};
const createExpensesService = async (name, nominal, category) => {
	try {
		const expenses = await createExpensesQuery(
			name,
			nominal,
			category
		);
		return expenses;
	} catch (err) {
		console.log(err);
	}
};
const changeExpensesService = async (name, nominal, category, id) => {
	try {
		const expenses = await changeExpensesQuery(
			name,
			nominal,
			category,
			id
		);
		return expenses;
	} catch (err) {
		console.log(err);
	}
};
const removeExpensesService = async (id) => {
	try {
		const expenses = await removeExpensesQuery(id);
		return expenses;
	} catch (err) {
		console.log(err);
	}
};

const findexpensesServiceByDate = async (date, category) => {
	try {
		const expenses = await findExpensesQueryByDate(date, category);
		// let resultExpenses = 0;
		if (date || category) {
			// for (let x in expenses) {
			// 	resultExpenses += Number(expenses[x].nominal);
			// }
			let resultNominal = expenses
				.map((data) => {
					return data.nominal;
				})
				.reduce((total, num) => +total + +num);
			return `${resultNominal}`;
		}
		return expenses;
	} catch (err) {
		console.log(err);
	}
};
// const findexpensesServiceByCategory = async (category) => {
// 	try {
// 		const expenses = await findExpensesQueryByCategory(category);
// 		let resultExpenses = 0;
// 		for (let x in expenses) {
// 			resultExpenses += Number(expenses[x].nominal);
// 			// if (expenses[x].category.toLowerCase() == category) {
// 			// }
// 		}
// 		return resultExpenses;
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

module.exports = {
	findExpensesServiceList,
	findExpensesService,
	createExpensesService,
	changeExpensesService,
	removeExpensesService,
	findexpensesServiceByDate,
	// findexpensesServiceByCategory,
};
