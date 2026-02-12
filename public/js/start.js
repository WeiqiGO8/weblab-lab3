console.log("hello");

//! Lab 3 part 1 task 4
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
