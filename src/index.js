const express = require("express");
const path = require("path");
require("dotenv").config({
	path: path.resolve(__dirname, "../.env"),
});
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;

const app = new express();

app.use(bodyParser.json());

const expenseRouter = require("./routers/expenseRoute");

app.use(`/expenses`, expenseRouter);

app.listen(PORT, (req, res) => {
	console.log(`Server started on port ${PORT}`);
});
