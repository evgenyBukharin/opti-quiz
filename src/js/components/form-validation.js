const forms = document.querySelectorAll(".tests__form");

forms.forEach((form) => {
	const markLists = form.querySelectorAll(".table__list");
	const submitBtn = form.querySelector(".tests__button-form");
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
});
