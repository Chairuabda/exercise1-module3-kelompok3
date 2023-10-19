const axios = require("axios");

const jsonURL = process.env.JSON_URL;

const findExpensesQueryList = async () => {
	try {
		const { data } = await axios.get(`${jsonURL}/user`);
		return data;
	} catch (err) {
		return res.status(500).json({
			message: err.message,
		});
	}
};

const findExpensesQuery = async (id) => {
	try {
		const { data } = await axios.get(`${jsonURL}/user/${id}`);
		return data;
	} catch (err) {
		console.log(err);
	}
};

const createExpensesQuery = async (name, nominal, category) => {
	try {
		const { data } = await axios.post(`${jsonURL}/user`, {
			name,
			nominal,
			category,
			date: `${new Date().getDate()}-${
				new Date().getUTCMonth() + 1
			}-${new Date().getFullYear()}`,
		});

		return data;
	} catch (err) {
		console.log(err);
	}
};

const changeExpensesQuery = async (name, nominal, category, id) => {
	try {
		const { data } = await axios.patch(`${jsonURL}/user/${id}`, {
			name,
			nominal,
			category,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};

const removeExpensesQuery = async (id) => {
	try {
		const { data } = await axios.delete(`${jsonURL}/user/${id}`);
		return data;
	} catch (err) {
		console.log(err);
	}
};

const findExpensesQueryByDate = async () => {
	try {
		const { data } = await axios.get(`${jsonURL}/user`);
		return data;
	} catch (err) {
		console.log(err);
	}
};
const findExpensesQueryByCategory = async (category) => {
	try {
		const { data } = await axios.get(`${jsonURL}/user?category=${category}`);
		console.log(data);
		return data;
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	findExpensesQueryList,
	findExpensesQuery,
	createExpensesQuery,
	changeExpensesQuery,
	removeExpensesQuery,
	findExpensesQueryByCategory,
	findExpensesQueryByDate,
};
