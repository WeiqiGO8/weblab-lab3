console.log("hello");

function fetchProducts() {
	fetch("/api/products")
		.then((response) => response.json())
		.then((data) => {
			//data
			console.log(data);
		})
		.catch((error) => console.log(error));
}

function fetchProductsByID() {}

fetchProducts();
