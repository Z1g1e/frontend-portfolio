let button = document.querySelector('.task-button')
let input = document.querySelector('#input-field')
let list = document.querySelector('.todo-list')

button.addEventListener('click', () => {
    // Перевірка, чи не є поле порожнім
    if (input.value.trim() !== "") { 
        const li = document.createElement('li');
        li.className = "todo-list-item";
        
        // Створюємо текст для пункту списку з введеним значенням
        li.innerText = input.value;
        
        // Створюємо кнопку Delete тільки після введення тексту
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete-Button";
        
        list.appendChild(li); // Додаємо елемент списку
        li.appendChild(deleteBtn); // Додаємо кнопку видалення до цього елемента

        // Очищуємо поле після додавання
        input.value = "";

        // Подія для видалення елемента зі списку
        deleteBtn.addEventListener('click', () => {
            list.removeChild(li);
        });
    } else {
        alert("Please enter a task before adding."); // Можна додати повідомлення, якщо поле порожнє
    }
});