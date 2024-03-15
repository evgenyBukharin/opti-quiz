const questionsData = [
	{
		firstSign: "Я редко вижу в начале рабочего дня хмурые и постные лица своих коллег",
		secondSign:
			"Большинство членов коллектива приходят на работу с будничным настроением, не ощущая подъема и приподнятости",
	},
	{
		firstSign: "Большинство из нас радуются, когда появляется возможность пообщаться друг с другом",
		secondSign: "Члены нашего коллектива проявляют безразличие к эмоциональному общению",
	},
	{
		firstSign: "Доброжелательность и доверительные интонации преобладают в нашем деловом общении",
		secondSign: "Нервозность, явная или скрытая раздражительность окрашивают наши деловые отношения",
	},
	{
		firstSign: "Успехи каждого из нас искренне радуют всех остальных и почти ни у кого не вызывают зависти",
		secondSign: "Успех почти любого из нас может вызвать болезненную реакцию окружающих",
	},
	{
		firstSign: "В нашем коллективе новичок, скорее всего, встретит доброжелательность и радушие",
		secondSign: "В нашем коллективе новичок еще долго будет чувствовать себя чужаком",
	},
	{
		firstSign:
			"В случае неприятностей мы не спешим обвинять друг друга, а пытаемся спокойно разобраться в их причинах",
		secondSign: "В случае неприятностей у нас будут пытаться свалить вину друг на друга или найдут виноватого",
	},
	{
		firstSign: "Когда рядом с нами наш руководитель, мы чувствуем себя естественно и раскованно",
		secondSign: "В присутствии руководителя многие из нас чувствуют себя скованно и напряженно",
	},
	{
		firstSign: "У нас обычно принято делиться своими семейными радостями и заботами",
		secondSign: "Многие из нас предпочитают «свое носить в себе»",
	},
	{
		firstSign: "Неожиданный вызов к руководителю у большинства из нас не вызовет отрицательных эмоций",
		secondSign: "Неожиданный вызов к руководителю у многих из нас сопровождается отрицательными эмоциями",
	},
	{
		firstSign:
			"Нарушитель трудовой дисциплины будет у нас держать ответ не только перед руководителем, но и перед всем коллективом",
		secondSign: "Нарушитель трудовой дисциплины у нас будет держать ответ лишь перед руководителем",
	},
	{
		firstSign: "Большинство критических замечаний мы высказываем друг другу тактично, исходя из лучших побуждений",
		secondSign: "У нас критические замечания чаще всего носят характер явных или скрытых выпадов",
	},
	{
		firstSign: "Появление руководителя у нас вызывает приятное оживление",
		secondSign: "Появление руководителя у большинства из нас особых восторгов не вызывает",
	},
	{
		firstSign: "В нашем коллективе гласность – это норма жизни",
		secondSign: "До настоящей гласности в нашем коллективе еще далеко",
	},
];
const firstTest = document.querySelector(".tests__test-1");
if (firstTest) {
	const questionsTable = firstTest.querySelector(".tests__table");
	let marksCount = 5;
	let questionInnerHtml = `
		<div class="table__cell table__cell-number"></div>
		<div class="table__cell table__cell-priznak table__cell-priznak-1"></div>
		<div class="table__cell table__cell-mark">
			<ul class="list-reset table__list"></ul>
		</div>
		<div class="table__cell table__cell-priznak table__cell-priznak-2"></div>
	`;
	questionsData.forEach((question, idx) => {
		let questionRow = document.createElement("div");
		questionRow.classList = "table__row";
		questionRow.innerHTML = questionInnerHtml;

		// заполняем номер вопроса
		let questionNumberNode = questionRow.querySelector(".table__cell-number");
		questionNumberNode.innerHTML = idx + 1;

		// заполняем первый признак
		let firstSignNode = questionRow.querySelector(".table__cell-priznak-1");
		firstSignNode.innerHTML = question.firstSign;

		// заполняем второй признак
		let secondSignNode = questionRow.querySelector(".table__cell-priznak-2");
		secondSignNode.innerHTML = question.secondSign;

		// созданием элемент с выбором значения
		let marksList = questionRow.querySelector(".table__list");
		for (let i = 1; i < marksCount + 1; i++) {
			let newItem = document.createElement("li");
			newItem.classList = "table__item";
			newItem.innerHTML = `
				<input
					type="radio"
					name="question${idx}"
					id="q${idx}answer${i}"
					class="table__input"
					value="${i}"
					required
				/>
				<label class="table__label" for="q${idx}answer${i}">${i}</label>
			`;
			marksList.appendChild(newItem);
		}
		questionsTable.appendChild(questionRow);
	});
}
