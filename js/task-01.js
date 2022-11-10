// // HTML містить список категорій ul#categories.
// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст 
// заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, 
// вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2');
    console.log(`Category: ${categoryName.textContent}`);

    const categoryElements = category.querySelectorAll('ul>li');
    console.log(`Elements:${categoryElements.length}`);
})
console.log();