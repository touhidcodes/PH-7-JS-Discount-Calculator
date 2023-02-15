// get element by id
function getId(id) {
	const element = document.getElementById(id);
	return element;
}

function getTextById(Id) {
	const textId = document.getElementById(Id);
	const textString = textId.innerText;
	const textValue = parseInt(textString);
	return textValue;
}

// function add(addId) {
// 	const addId = document.getElementById(addId);
// 	const add = addId.innerText + 1;
// 	return add;
// }

// function set(id, value) {
// 	const setId = document.getElementById(id);
// 	const set = setId.innerText + value;
// }

function setPrice(value) {
	const itemPrice = getTextById("item-value");
	const newItemPrice = itemPrice * value;

	const totalValueId = getId("total-Value");
	totalValueId.innerText = newItemPrice;
}

function validation(value) {
	const itemPrice = getTextById("item-value");
	const newItemPrice = itemPrice * value;

	const totalValueId = getId("total-Value");
	const itemId = getId("item");

	if (newItemPrice < 0) {
		alert("Please select minimum one item");
		itemId.innerText = 0;
		totalValueId.innerText = 0;
	}
}
