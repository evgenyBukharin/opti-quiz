/******/ (() => {
	// webpackBootstrap
	/******/ var __webpack_modules__ = {
		/***/ 488: /***/ () => {
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
					firstSign:
						"Успехи каждого из нас искренне радуют всех остальных и почти ни у кого не вызывают зависти",
					secondSign: "Успех почти любого из нас может вызвать болезненную реакцию окружающих",
				},
				{
					firstSign: "В нашем коллективе новичок, скорее всего, встретит доброжелательность и радушие",
					secondSign: "В нашем коллективе новичок еще долго будет чувствовать себя чужаком",
				},
				{
					firstSign:
						"В случае неприятностей мы не спешим обвинять друг друга, а пытаемся спокойно разобраться в их причинах",
					secondSign:
						"В случае неприятностей у нас будут пытаться свалить вину друг на друга или найдут виноватого",
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
					secondSign:
						"Неожиданный вызов к руководителю у многих из нас сопровождается отрицательными эмоциями",
				},
				{
					firstSign:
						"Нарушитель трудовой дисциплины будет у нас держать ответ не только перед руководителем, но и перед всем коллективом",
					secondSign: "Нарушитель трудовой дисциплины у нас будет держать ответ лишь перед руководителем",
				},
				{
					firstSign:
						"Большинство критических замечаний мы высказываем друг другу тактично, исходя из лучших побуждений",
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
							/>
							<label class="table__label" for="q${idx}answer${i}">${i}</label>
						`;
						marksList.appendChild(newItem);
					}
					questionsTable.appendChild(questionRow);
				});
			}

			/***/
		},

		/***/ 861: /***/ () => {
			const dateInputs = document.querySelectorAll(".tests__input-date");
			const today = new Date();
			dateInputs.forEach((input) => {
				input.valueAsDate = today;
			});

			/***/
		},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	var __webpack_exports__ = {};
	// This entry need to be wrapped in an IIFE because it need to be in strict mode.
	(() => {
		"use strict"; // CONCATENATED MODULE: ./src/js/_vars.js

		/* harmony default export */ const _vars = {
			windowEl: window,
			documentEl: document,
			htmlEl: document.documentElement,
			bodyEl: document.body,
		};
		// EXTERNAL MODULE: ./src/js/components/test.js
		var test = __webpack_require__(861);
		// EXTERNAL MODULE: ./src/js/components/questions-fabric.js
		var questions_fabric = __webpack_require__(488); // CONCATENATED MODULE: ./src/js/_components.js // CONCATENATED MODULE: ./src/js/main.js
	})();

	/******/
})();
