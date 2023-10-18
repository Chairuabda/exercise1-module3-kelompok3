const { findExpensesService } = require("../services/expenseService")

const findExpensesController = async(req, res) => {
    try{
        const expenses = await findExpensesService();
        
        return res.status(200).json({
            message: "Get expenses success",
            data: expenses,
        })
    } catch(err) {
        return res.status(500).json({
            message: err.message,
        })
    }
}

module.exports = { findExpensesController }