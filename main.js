ъ// Функция для вывода сообщения в консоль
function showMessage(message) {
  console.log(message);
  logCurrentTime(); // Вызов функции для логирования времени
}

// Функция для изменения фона страницы на заданный цвет
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Функция для сброса фона страницы к исходному значению
function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// Функция для переключения видимости элемента по селектору
function toggleVisibility(selector) {
  const element = document.querySelector(selector);
  if (element) {
      // Переключаем отображение элемента
      element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
  }
}

// Функция для извлечения значения параметра utm_term из URL
function getUTMTerm() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('utm_term'); // Извлекает параметр utm_term
}

// Функция для логирования текущего времени в формате "ЧЧ:ММ:СС"
function logCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  console.log(`Текущее время: ${hours}:${minutes}:${seconds}`);
}
