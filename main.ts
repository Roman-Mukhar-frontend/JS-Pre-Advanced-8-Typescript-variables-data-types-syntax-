// +Завдання 1.
// Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)
// Створіть змінну city з типом даних string.
// Присвойте їй значення «Київ».
// Змініть значення змінної city на «Львів».
// Створіть змінну address з типом даних string і скопіюйте в неї значення змінної city.
// Вивести значення змінної address з допомогою команди console.log().

let city: string;
city = 'Київ';
city = 'Львів';
let adress: string = city;
console.log(adress);

// +Завдання 2.
// Використовуючи конструкцію if..else через тернарний вираз, напишіть код, який отримує число через prompt, а потім виводить в console.log() повідомлення:
// Число парне.
// Число непарне.
// Число 0.

let numFromPrompt: any = prompt('Введіть число');
let number: number = numFromPrompt;
number == 0 ? console.log('число 0')
    : number % 2 === 0 ? console.log(`${number}: число парне`) 
    : console.log(`${number}: число непарне`);

// +Завдання 3.
// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// Кількість параметрів у функції може бути від 2х і більше.
// Приклад роботи:
// max(5,-2) – має повернути 5.
// max(5,-2, 30, 6) – має повернути 30

function max(...arg: Array<number>): number {

    // ВАРІАНТ 1
    return Math.max(...arg);

    // ВАРІАНТ 2
    // let max: number = arg[0];
    // for( let i: number = 0; i < arguments.length; i++){
    //     if (arguments[i] > max) {
    //         max = arguments[i];
    //     }
    // }
    // return max;
}
console.log(max(5, -2));
console.log(max(5, -2, 30, 6));

// +Завдання 4. 
// Напишіть функцію getSqrt(number), яка вираховує корінь квадратний. Для визначення кореня використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:
// Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.
// Якщо передали не число - Повинно бути числове значення.
// Якщо число менше 0 - Введіть додатнє число.
// Якщо в функцію нічого не передали - Будь ласка, введіть число!

function getSqrt(number: any): any {
    if (typeof (number) == 'number') {
        number < 0 ? console.log('Введіть додатнє число') : console.log(Math.sqrt(number));
    }
    if (typeof (number) == 'string') {
        number.length > 0 ? console.log('Повинно бути числове значення') : console.log('Будь ласка, введіть число!');
    }
}
getSqrt(4);
getSqrt('qwe');
getSqrt(-2);
getSqrt('');

// +Завдання 5.
// Необхідно відтворити функціонал як на відео Cenzor, а саме:
// +При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”
// +Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
// При кліку на Cenzor перевіряється чи є в textarea заборонене слово, якщо так його заміняє на *, причому на ту кількість яка довжина слова
// Якщо textarea порожня виводити повыдолення про заповнення поля

let badWords = document.querySelector('.bad-words') as HTMLElement;
let addBtn = document.querySelector('.add') as HTMLInputElement;
let resetBtn = document.querySelector('.reset') as HTMLInputElement;
let cenzorBtn = document.querySelector('.big-btn') as HTMLInputElement;
let inputBadWords = document.querySelector('.input-one') as HTMLInputElement;
let inputText = document.querySelector('.input-two') as HTMLInputElement;

// FUNCTION BUTTON "ADD"
addBtn.addEventListener('click', function () {
    if (inputBadWords.value == '') {
        inputBadWords.placeholder = 'Please, write a word!';
    }
    else {
        if (badWords.textContent == '') {
            badWords.textContent += inputBadWords.value;
        }
        else {
            badWords.textContent += `,${inputBadWords.value}`;
        }
        inputBadWords.placeholder = 'word here...'
        inputBadWords.value = '';
    }
})

// FUNCTION BUTTON "RESET"
resetBtn.addEventListener('click', function () {
    location.reload();
})
// FUNCTION BUTTON "CENZOR"
cenzorBtn.addEventListener('click', function () {
    if (inputText.value == '') {
        inputText.placeholder = 'Please, write a word!';
    }
    else {
        let badWordsList: any = badWords.textContent?.split(',');
        let textForCenzor: string = inputText.value;

        for (let i: number = 0; i < badWordsList.length; i++) {
            let badWord: string = badWordsList[i];
            while (textForCenzor.includes(badWord)) {
                let word: string = "*";
                for (let a: number = 1; a < badWord.length; a++) {
                    word += "*";
                }
                textForCenzor = textForCenzor.replace(badWord, word);
            }
            inputText.value = textForCenzor;
        }
    }
})



