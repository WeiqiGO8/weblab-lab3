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
	// * This works
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
	const { productName, productPrice } = req.body;
	console.log(productName, productPrice);
	res.json({
		message: "POST - Created a new item",
		data: { productName, productPrice },
	});
});

//! Lab 3 part 2 task 2
//* PUT request for Updating Resources
app.put("/api/products/:id", express.json(), (req, res) => {
	const itemId = req.params.id;
	const updatedData = req.body;
	res.json({
		message: `PUT - updated item with ID ${itemId}`,
		data: updatedData,
	});
});

//! Lab 3 part 2 task 3
//* DELETE Requests
app.delete("/api/products/:id", express.json(), (req, res) => {
	res.json({
		message: `DELETE - removed item with ID ${itemID}`,
	});
});

//* PORT/localhost
app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`);
});
