// Add Item
document.getElementById("add").addEventListener("click", function () {
	const item = getTextById("item");
	const newItem = item + 1;
	const itemId = getId("item");
	itemId.innerText = newItem;

	const itemPrice = getTextById("item-value");
	const newItemPrice = itemPrice * newItem;

	const totalValueId = getId("total-Value");
	totalValueId.innerText = newItemPrice;
});
// Remove Item
document.getElementById("remove").addEventListener("click", function () {
	const item = getTextById("item");
	const newItem = item - 1;
	const itemId = getId("item");
	itemId.innerText = newItem;

	const itemPrice = getTextById("item-value");
	const newItemPrice = itemPrice * newItem;

	const totalValueId = getId("total-Value");
	totalValueId.innerText = newItemPrice;

	if (newItemPrice < 0) {
		alert("Please select minimum one item");
		itemId.innerText = 0;
		totalValueId.innerText = 0;
	}
});
