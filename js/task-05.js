
// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

console.log(inputEl);
console.log(outputEl);

inputEl.addEventListener("input", (event) => {
  if (event.target.value === "") {
    outputEl.textContent = "Anonymous";

    return;
  }

  outputEl.textContent = event.target.value;
});