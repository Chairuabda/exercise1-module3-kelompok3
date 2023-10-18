const axios = require("axios")

// const jsonURL = process.env.JSON_URL

const findExpensesQuery = async () => {
    try {
        const { data } = await axios.get(`http://localhost:3000/user`)
        return data;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    findExpensesQuery,
}