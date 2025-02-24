
// Универсальная функция для управления классами у column
function toggleColumnClass(element, targetClass, columnClass, invert = false) {
  // Находим родителя с классом "book-form__column"
  const columnElement = element.closest('.book-form__column');
  
  // Проверяем, нужно ли инвертировать логику (если класс должен добавляться при отсутствии targetClass)
  const hasClass = element.classList.contains(targetClass);
  
  if (invert ? !hasClass : hasClass) {
      // Добавляем соответствующий класс к column
      columnElement.classList.add(columnClass);
  } else {
      // Убираем класс у column
      columnElement.classList.remove(columnClass);
  }
}

// Универсальная функция для наблюдения за изменениями классов
function observeElement(element, targetClass, columnClass, invert = false) {
  // Создаем новый объект MutationObserver
  const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
          // Проверяем, были ли изменения в атрибутах (в данном случае - классах)
          if (mutation.attributeName === 'class') {
              // Управляем классами у column
              toggleColumnClass(mutation.target, targetClass, columnClass, invert);
          }
      });
  });

  // Настройки для наблюдателя: отслеживаем изменения атрибутов
  observer.observe(element, { attributes: true });
}

// Применение к элементам select (без инверсии)
document.querySelectorAll('.choices').forEach(selectElement => {
  observeElement(selectElement, 'is-open', 'is-open');
});

// Применение к элементам container (с инверсией)
document.querySelectorAll('.qs-datepicker-container').forEach(containerElement => {
  observeElement(containerElement, 'qs-hidden', '_datepicker-open', true);
});









