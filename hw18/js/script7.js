function getTotalPrice() {
	let totalSum = 0
	const transportPrice = parseFloat(document.getElementById("transport").value)
	totalSum += transportPrice
	const inputPrice = document.getElementsByTagName("input")
	for (const input of inputPrice) {
		if (input.checked) totalSum += parseFloat(input.value)
  }

	document.getElementById("result").innerText = totalSum;
}
window.onload = function () {
	document.querySelector('button').onclick = getTotalPrice
}