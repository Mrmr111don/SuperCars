document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Получаем значения формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
  
    // Простейшая валидация (вы можете её улучшить)
    if (name && email && feedback) {
      // Отображаем сообщение об успешной отправке
      const responseMessage = document.getElementById('responseMessage');
      responseMessage.textContent = 'Спасибо за ваш отзыв!';
      responseMessage.style.opacity = 1;
  
      // Очистка формы
      document.getElementById('feedbackForm').reset();
  
      // Симуляция отправки данных на сервер (вы можете подключить сюда AJAX или Fetch API)
      setTimeout(() => {
        responseMessage.style.opacity = 0;
      }, 3000);
    }
  });
  