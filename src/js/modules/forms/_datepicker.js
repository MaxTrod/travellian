/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { msiModules } from "../_modules.js";

// Підключення модуля
import datepicker from 'js-datepicker';

// if (document.querySelector('[data-datepicker]')) {
// 	const picker = datepicker('[data-datepicker]', {
// 		customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
// 		customMonths: ["Січ", "Лют", "Берез", "Квіт", "Трав", "Черв", "Лип", "Серп", "Верес", "Жовт", "Листоп", "Груд"],
// 		overlayButton: 'Застосувати',
// 		overlayPlaceholder: 'Рік (4 цифри)',
// 		startDay: 1,
// 		formatter: (input, date, instance) => {
// 			const value = date.toLocaleDateString()
// 			input.value = value
// 		},
// 		onSelect: function (input, instance, date) {

// 		}
// 	});
// 	msiModules.datepicker = picker;
// }

if (document.querySelector('[data-datepicker]')) {
    let options = {
    id: 1,
    // position: 'c',
    // position: 'tl',
    startDay: 1,
    disableYearOverlay: false ,
    overlayButton: "ok",
    formatter: (input, date, instance) => {
      const day = date.getDate();
      const daySuffix = getDaySuffix(day);
      const formattedDate = `${date.toLocaleString('en-us', { weekday: 'short' })}, ${day}${daySuffix} ${date.toLocaleString('en-us', { month: 'short' })} ${date.getFullYear()}`;
      input.value = formattedDate;
		},
  }

  function positionChange () {
    if (window.innerHeight < 1194) {
      options.position = 'tl';
    } else {
      options.position = 'bl';
    }
  }

  positionChange();
  window.addEventListener('resize', positionChange);


  const start = datepicker('#checkin', options) 
  const end = datepicker('#checkout', options)   


  // Функция для добавления суффиксов (st, nd, rd, th)
function getDaySuffix(day) {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }


}

  
  // msiModules.datepicker = picker;
}








