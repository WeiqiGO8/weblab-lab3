const express = require("express");
const app = express();
const PORT = 3000;

app.use("/", express.static("public"));

app.get("/welcome", (req, res) => {
	res.send("Welcome to the REST API!");
});

app.get("/api/products", (req, res) => {
	res.json(products); // Converts Javascript data into JSON and sends it back
});

app.get("/api/products/:id", (req, res) => {
	const rid = parseInt(req.params.id);
	console.log(rid);
	// Loop over products and take out the respective object !!
	for (let product of products) {
		console.log(product);
	}

	res.json(product);
});

app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`);
});

//Global object that any function can access.
let products = [
	{ id: 1, name: "Laptop", price: 1000 },
	{ id: 2, name: "Phone", price: 500 },
];
