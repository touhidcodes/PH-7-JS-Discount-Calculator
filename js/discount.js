// Add Item
document.getElementById("add").addEventListener("click", function () {
	const item = getTextById("item");
	const newItem = item + 1;
	const itemId = getId("item");
	itemId.innerText = newItem;

	setPrice(newItem);
});

// Remove Item
document.getElementById("remove").addEventListener("click", function () {
	const item = getTextById("item");
	const newItem = item - 1;
	const itemId = getId("item");
	itemId.innerText = newItem;

	setPrice(newItem);
	validation(newItem);
});
