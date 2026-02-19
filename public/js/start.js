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
				console.log(`products fetched`, data);
				// let newLi = document.createElement("li");
				// newLi.innerText = p.id + ": " + p.name + ", " + p.price;
				// document.querySelector(`#insertProduct`).appendChild(newLi);
			});
		})
		.catch((error) => console.log(error));
}

fetchProducts();

function fetchProductsByID(id) {
	fetch(`/api/products/${id}`)
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
}

// fetchProductsByID(2);

//! Lab 3 part 2 task 1
//* Handling POST requests
function addProduct() {
	fetch("/api/products", {
		method: `POST`,
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name: "TV", price: 500 }),
	})
		.then((response) => response.json())
		.then((data) => console.log("Post response data:", data))
		.catch((error) => console.log(error));
}

addProduct();

//! Lab 3 part 2 task 2
//* PUT request for Updating Resources

function updateProducts(id) {
	fetch(`/api/products/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			name: "The selected id will be updated",
			price: 300,
		}),
	})
		.then((response) => response.json())
		.then((data) => console.log(`PUT response data:`, data))
		.catch((error) => console.log(error));
}
updateProducts(2);

//! Lab 3 part 2 task 3
//* DELETE Requests
function deleteProduct(id) {
	fetch(`/api/products/${id}`, {
		method: "DELETE",
	})
		.then((response) => {
			if (!response.ok)
				throw new Error("Error occured when trying to retrive information");
			return response.json();
		})
		.then((data) => console.log("DELETE RESPONSE", data))
		.catch((error) =>
			console.log("Something went wrong when trying to delete", error),
		);
}
// deleteProduct(1);
