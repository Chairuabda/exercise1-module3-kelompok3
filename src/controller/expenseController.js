const {
	findExpensesService,
	findExpensesServiceList,
	createExpensesService,
	changeExpensesService,
	removeExpensesService,
    // findexpensesServiceByCategory,
    findexpensesServiceByDate
} = require("../services/expenseService");

const findExpensesControllerList = async (req, res) => {
	try {
		const expenses = await findExpensesServiceList();
		return res.status(200).json({
			message: "Get expenses success",
			data: expenses,
		});
	} catch (err) {
		return res.status(500).json({
			message: err.message,
		});
	}
};
const findExpensesController = async (req, res) => {
	try {
		const { id } = req.params;
		const expenses = await findExpensesService(id);
		return res.status(200).json({
			message: "Find expenses success",
			data: expenses,
		});
	} catch (err) {
		return res.status(500).json({
			message: err.message,
		});
	}
};
const createExpensesController = async (req, res) => {
	try {
		const { name, nominal, category } = req.body;
		const expenses = await createExpensesService(
			name,
			nominal,
			category
		);
		return res.status(200).json({
			message: "Create expenses success",
			data: expenses,
		});
	} catch (err) {
		return res.status(500).json({
			message: err.message,
		});
	}
};
const changeExpensesController = async (req, res) => {
	try {
		const { name, nominal, category, id } = req.query;
		const expenses = await changeExpensesService(
			name,
			nominal,
			category,
			id
		);
		return res.status(200).json({
			message: "Change expenses success",
			data: expenses,
		});
	} catch (err) {
		return res.status(500).json({
			message: err.message,
		});
	}
};
const removeExpensesController = async (req, res) => {
	try {
		const { id } = req.params;
		const expenses = await removeExpensesService(id);
		return res.status(200).json({
			message: "Delete expenses success",
			data: expenses,
		});
	} catch (err) {
		return res.status(500).json({
			message: err.message,
		});
	}
};

const findExpensesControllerByDate = async (req, res) => {
    try {
        const { date = null, category = null } = req.query;
        const expenses = await findexpensesServiceByDate(date, category);
        return res.status(200).json({
            message: 'get by date expense succes',
            data : expenses,
        })
    } catch (err) {
        return res.status(500).json({
			message: err.message,
		});
    }
}

// const findExpensesControllerByCategory = async (req, res) => {
//     try {
//         const { category } = req.query;
//         const expenses = await findexpensesServiceByCategory(category);
//         return res.status(200).json({
//             message: 'get by category expense succes',
//             total : `${category}: ${expenses}`,
//         })
//     } catch (err) {
//         return res.status(500).json({
// 			message: err.message,
// 		});
//     }
// }

module.exports = {
	findExpensesControllerList,
	findExpensesController,
	createExpensesController,
	changeExpensesController,
	removeExpensesController,
    findExpensesControllerByDate,
    // findExpensesControllerByCategory
};
