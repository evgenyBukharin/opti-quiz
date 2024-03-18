const dateInputs = document.querySelectorAll(".tests__input-date");
const today = new Date();
dateInputs.forEach((input) => {
	input.valueAsDate = today;
});
