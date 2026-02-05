const express = require("express");
const app = express();
const PORT = 3000;

app.use("/", express.static("public"));

app.get("/", (req, res) => {
	res.send("Welcome to the REST API!");
});

app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`);
});
