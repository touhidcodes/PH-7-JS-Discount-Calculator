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

// Coupon Apply
document.getElementById("btn-coupon").addEventListener("click", function () {
	const couponId = getId("coupon");
	const coupon = couponId.value;
	const couponTrueId = getId("coupon-true");
	const couponFalseId = getId("coupon-false");
	const showCouponId = getId("show-coupon");
	const couponItemId = getId("coupon-item");
	const discountId = getId("discount");
	const grandTotalId = getId("grand-total");

	const totalValueId = getId("total-Value");
	const totalValueString = totalValueId.innerText;
	const totalValue = parseFloat(totalValueString);

	const discount = (totalValue * 30) / 100;
	const grandTotal = totalValue - discount;

	if (coupon === "touhidcodes" || coupon === "DISC30") {
		couponId.value = "";
		couponTrueId.style.display = "block";
		showCouponId.innerText = coupon;
		couponItemId.style.display = "none";
		discountId.innerText = discount;
		grandTotalId.innerText = grandTotal;
	} else {
		couponFalseId.style.display = "block";
		couponItemId.style.display = "none";
	}
});
