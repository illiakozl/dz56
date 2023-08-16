function generateList(array) {
    if (!Array.isArray(array)) {
        return ''; // Якщо переданий аргумент не є масивом, повертаємо порожній рядок.
    }

    let html = '<ul>'; // Починаємо зовнішній список.

    for (const item of array) {
        html += '<li>';

        if (Array.isArray(item)) {
            html += generateList(item); // Якщо елемент є масивом, рекурсивно генеруємо вкладений список.
        } else {
            html += item; // Якщо елемент - число, додаємо його до списку.
        }

        html += '</li>';
    }

    html += '</ul>'; // Закриваємо зовнішній список.

    return html;
}

// Приклад використання:
const inputArray = [1, 2, 3, [1.1, 1.2, 1.3], 4];
const resultHTML = generateList(inputArray);

console.log(resultHTML);
