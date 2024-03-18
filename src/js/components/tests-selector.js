const testButtons = document.querySelectorAll(".tests__button");
let visibleTestId = null;

function hideNode(selector) {
	document.querySelector(selector).classList.add("node-hidden");
}
function showNode(selector) {
	document.querySelector(selector).classList.remove("node-hidden");
}

testButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		// скрываем меню выбора тестов
		hideNode(".tests__selector");

		// показываем нужный тест
		testId = btn.getAttribute("data-test-id");
		visibleTestId = testId;
		showNode(`[data-test="${testId}"]`);
	});
});

const backButtons = document.querySelectorAll(".tests__button-back");
backButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		// скрываем меню выбора тестов
		showNode(".tests__selector");

		// скрываем видимый тест
		hideNode(`[data-test="${testId}"]`);
	});
});
