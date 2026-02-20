//! Lab 3 part 1 task 3

const express = require("express");
const app = express();
const PORT = 3000;

app.use("/", express.static("public"));

app.get("/welcome", (req, res) => {
	res.send("Welcome to the REST API!");
});

//! Lab 3 part 1 task 4
//* Building GET Endpoints

//Global object that any function can access.
let products = [
	{ id: 1, name: "Laptop", price: 1000 },
	{ id: 2, name: "Phone", price: 500 },
];

//building get endpoints
app.get("/api/products", (req, res) => {
	res.json(products); // Converts Javascript data into JSON and sends it back
});

app.get("/api/products/:id", (req, res) => {
	const rid = parseInt(req.params.id);
	console.log(rid);
	for (let product of products) {
		if (product.id === rid) {
			console.log(`Match found`);
			return res.json(product);
		}
	}
});

//! Lab 3 part 2 task 1
// * Handling POST requests
app.post("/api/products", express.json(), (req, res) => {
	const { name, price } = req.body;

	const postNewProduct = {
		id: product.length + 1,
		name: name,
		price: Number(price),
	};
	products.push({ postNewProduct });

	res.json({
		message: "POST - Created a new item",
		data: { postNewProduct },
	});
});

//! Lab 3 part 2 task 2
//* PUT request for Updating Resources
app.put("/api/products/:id", express.json(), (req, res) => {
	const itemId = parseInt(req.params.id);
	const { name, price } = req.body;
	const product = products.find((p) => p.id === itemId);

	product.name = name;
	product.price = price;

	res.json({
		message: `PUT - updated item with ID ${itemId}`,
		data: product,
	});
});

//! Lab 3 part 2 task 3
//* DELETE Requests
app.delete("/api/products/:id", (req, res) => {
	const itemId = parseInt(req.params.id);

	let index = products.findIndex((p) => p.id === itemId);
	if (index !== -1) {
		let deletedProduct = products.splice(index, 1)[0];

		res.json({
			message: `DELETE - removed item with ID ${itemId}`,
			deletedProduct,
		});
	}

	console.log("/api/products DELETE called", itemId);
});

//* PORT/localhost
app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`);
});
