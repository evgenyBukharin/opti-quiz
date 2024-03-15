const form = document.querySelector(".tests__form");
const submitBtn = document.querySelector(".tests__button-form");

const markLists = form.querySelectorAll(".table__list");
submitBtn.addEventListener("click", (e) => {
	e.stopPropagation();
	markLists.forEach((list) => {
		if (list.querySelector("input:invalid")) {
			list.classList.add("table__list-invalid");
		} else {
			list.classList.remove("table__list-invalid");
		}
	});
});

markLists.forEach((list) => {
	list.addEventListener("change", () => {
		if (list.classList.contains("table__list-invalid")) {
			list.classList.remove("table__list-invalid");
		}
	});
});
