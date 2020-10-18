const basketItems = ['Утюг', 'Утюг', 'Кофеварка', 'Пылесос']; //корзина
const ItemsCost = [['Утюг', 100], ['Кофеварка', 50], ['Пылесос', 250]]; //цена товара
let m = ' - это ноль';
let b = ' - это чётное число';
let c = ' - это нечётное число';
let d = -1;
do {
    d++;
    if (d === 0) {
        alert(d + m);
    } else if (d % 2 == 0) {
        alert(d + b);
    } else {
        alert(d + c);
    }
} while (d < 10);

// функция возврата стоимости конкретного товара.
const getItemPrice = (item, array) => {
    const items = [];
    const costs = [];
    // предполагаем, что мы знаем структуру массива со стоимостями товара, поэтому разбиваем его на 2 одномерных массива
    for (let i = 0; i < array.length; i++) {
        items.push(array[i][0]);
        costs.push(array[i][1]);
    }
    // используя метод .indexOf получаем индекс товара в массиве с названиями товаров и возвращаем стоимость по этому индексу из массива цен
    return costs[items.indexOf(item)];
};

const countBasketPrice = (basketArr, costArr) => {
    let totalCost = 0;
    for (let i = 0; i < basketArr.length; i++) {
        // на каждой итерации обхода массива корзины обращаемся к функции получения стоимости единицы товара.
        totalCost += getItemPrice(basketArr[i], costArr);
    }
    return totalCost;
};
console.log('Массив корзины: ' + basketItems);
console.log('Массив стоимости каждого товара: ' + ItemsCost);
console.log('Вывод полной стоимости корзины: ' + countBasketPrice(basketItems, ItemsCost));