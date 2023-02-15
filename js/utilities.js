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
