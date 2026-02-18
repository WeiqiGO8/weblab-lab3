console.log("hello");

//! Lab 3 part 1 task 4
//* Building GET Endpoints

function fetchProducts() {
	fetch("/api/products")
		.then((response) => response.json())
		.then((data) => {
			//data
			console.log(data);
			// Loop over products and take out the respective object !!
			console.log(`get response data`, data);
			data.forEach((p) => {
				let newLi = document.createElement("li");
				newLi.innerText = p.id + ": " + p.name + ", " + p.price;
				document.querySelector(`#insertProduct`).appendChild(newLi);
			});
		})
		.catch((error) => console.log(error));
}

function fetchProductsByID() {
	fetch(`/api/products/${id}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			return console.log(error);
		});
}

//fetchProducts();

//! Lab 3 part 2 task 1
//* Handling POST requests
let submitBtn = document.querySelector("#submitBtn");

function addProduct() {
	fetch("/api/products", {
		method: `POST`,
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			productName: "NewProduct",
			productPrice: 100,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log("Post response data:", data);

			// let newLi = document.createElement("li");
			// newLi.innerText = p.id + ": " + p.name + ", " + p.price;
			// document.querySelector(`#insertProduct`).appendChild(newLi);
		});
}

addProduct();
