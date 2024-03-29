let marksCount = 5;
const testData1 = [
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
if (firstTest && !firstTest.classList.contains("tests__test-hidden")) {
	const questionsTable = firstTest.querySelector(".tests__table");
	let questionInnerHtml = `
		<div class="table__cell table__cell-number"></div>
		<div class="table__cell table__cell-priznak table__cell-priznak-1"></div>
		<div class="table__cell table__cell-mark">
			<ul class="list-reset table__list"></ul>
		</div>
		<div class="table__cell table__cell-priznak table__cell-priznak-2"></div>
	`;
	testData1.forEach((question, idx) => {
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

const secondTest = document.querySelector(".tests__test-2");
const testData2 = {
	part1: {
		heading: "Отношение к подразделению",
		questions: [
			"Когда кто-то критикует отдел, в котором я работаю, это воспринимается мною как личное оскорбление",
			"Мне очень интересно, что думают другие сотрудники об отделе, в котором я работаю",
			"Когда я говорю о сотрудниках моего отдела, я обычно говорю «мы», а не «они»",
			"Когда кто-либо хвалит отдел, в котором я работаю, я воспринимаю это как личный комплимент",
			"Когда кто-либо критикует отдел, в котором я работаю, я чувствую замешательство (растерянность)",
		],
	},
	part2: {
		heading: "Отношение к организации в целом",
		questions: [
			"Когда кто-то критикует компанию, в которой я работаю, это воспринимается мною как личное оскорбление",
			"Мне очень интересно, что думают другие об организации, где я работаю",
			"Когда я говорю о компании, в которой я работаю, то обычно говорю «мы», а не «они»",
			"Когда кто-либо хвалит компанию, в которой я работаю, я воспринимаю это как личный комплимент",
			"Если бы статья в средствах массовой информации критиковала бы компанию, в которой я работаю, я почувствовал бы замешательство (растерянность, обиду)",
		],
	},
};
if (secondTest && !secondTest.classList.contains("tests__test-hidden")) {
	const questionsTable = secondTest.querySelector(".tests__table");
	let marksCount = 5;
	let questionInnerHtml = `
		<div class="table__cell table__cell-question"></div>
		<div class="table__cell table__cell-answer">
			<ul class="list-reset table__list"></ul>
		</div>
	`;
	let test2Keys = Object.keys(testData2);
	test2Keys.forEach((key) => {
		let questionHeaderRow = document.createElement("div");
		questionHeaderRow.classList = "table__row table__row-header";
		questionHeaderRow.innerHTML = questionInnerHtml;

		// заполняем заголовок
		let questionTitleNode = questionHeaderRow.querySelector(".table__cell-question");
		questionTitleNode.innerHTML = testData2[key].heading;

		// заполняем колонку ответ
		let questionAnswerNode = questionHeaderRow.querySelector(".table__cell-answer");
		questionAnswerNode.innerHTML = "Ответ";

		questionsTable.appendChild(questionHeaderRow);

		testData2[key].questions.forEach((question, idx) => {
			let questionRow = document.createElement("div");
			questionRow.classList = "table__row";
			questionRow.innerHTML = questionInnerHtml;

			// заполняем заголовок
			let questionTitleNode = questionRow.querySelector(".table__cell-question");
			questionTitleNode.innerHTML = question;

			// созданием элемент с выбором значения
			let marksList = questionRow.querySelector(".table__list");
			for (let i = 1; i < marksCount + 1; i++) {
				let newItem = document.createElement("li");
				newItem.classList = "table__item";
				newItem.innerHTML = `
						<input
							type="radio"
							name="${key}question${idx}"
							id="${key}q${idx}answer${i}"
							class="table__input"
							value="${i}"
							required
						/>
						<label class="table__label" for="${key}q${idx}answer${i}">${i}</label>
					`;
				marksList.appendChild(newItem);
			}

			questionsTable.appendChild(questionRow);
		});
	});
	// testData2.forEach((question, idx) => {
	// 	let questionRow = document.createElement("div");
	// 	questionRow.classList = "table__row";
	// 	questionRow.innerHTML = questionInnerHtml;

	// 	// заполняем номер вопроса
	// 	let questionNumberNode = questionRow.querySelector(".table__cell-number");
	// 	questionNumberNode.innerHTML = idx + 1;

	// 	// заполняем первый признак
	// 	let firstSignNode = questionRow.querySelector(".table__cell-priznak-1");
	// 	firstSignNode.innerHTML = question.firstSign;

	// 	// заполняем второй признак
	// 	let secondSignNode = questionRow.querySelector(".table__cell-priznak-2");
	// 	secondSignNode.innerHTML = question.secondSign;

	// 	// созданием элемент с выбором значения
	// 	let marksList = questionRow.querySelector(".table__list");
	// 	for (let i = 1; i < marksCount + 1; i++) {
	// 		let newItem = document.createElement("li");
	// 		newItem.classList = "table__item";
	// 		newItem.innerHTML = `
	// 			<input
	// 				type="radio"
	// 				name="question${idx}"
	// 				id="q${idx}answer${i}"
	// 				class="table__input"
	// 				value="${i}"
	// 				required
	// 			/>
	// 			<label class="table__label" for="q${idx}answer${i}">${i}</label>
	// 		`;
	// 		marksList.appendChild(newItem);
	// 	}
	// 	questionsTable.appendChild(questionRow);
	// });
}
