'use strict';

// 1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом,
// який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару,
// сума. Написати кілька функцій для роботи з таким масивом:
  // 1) Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
  // що ще не придбані, а потім - ті, що вже придбали.
  // 2) Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

let arrShoppingList = [
  {
    productName: 'bread',
    amount: 1,
    isBought: true,
    price: 20,
    total: 20
  },
  {
    productName: 'milk',
    amount: 2,
    isBought: false,
    price: 65,
    total: 130
  },
  {
    productName: 'meat',
    amount: 3,
    isBought: false,
    price: 105,
    total: 315
  }
];

function getSortedShoppingList() {
  return arrShoppingList.sort((a, b) => a.isBought - b.isBought);
};

function productPurchase(product) {
  for (let item of arrShoppingList) {
    if (item.productName === product) {
      item.isBought = true;
    }
  }
};

const shoppingList = document.getElementById('shoppingList');
const purchasedProductInput = document.getElementById('purchasedProduct');
const deletedProductInput = document.getElementById('deletedProduct');
const addProductNameInput = document.getElementById('addProductName');
const addProductAmountInput = document.getElementById('addProductAmount');
const addProductPriceInput = document.getElementById('addProductPrice');
const button = document.getElementById('btn');

getSortedShoppingList();

function showList() {
  arrShoppingList.forEach(item => {
    shoppingList.innerHTML += `<li>${item.productName.toUpperCase()}: ${item.amount} - ${item.price} UAH - Total: ${item.total} UAH - <input type="checkbox" ${item.isBought ? "checked" : ""}></li>`;
  });
};

showList();

purchasedProductInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    productPurchase(purchasedProductInput.value);
    shoppingList.innerHTML = '';
    getSortedShoppingList();
    showList();
  }
});

// 2. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву,
// в якому продукт, що ми шукаємо, буде відсутнім)

function deleteProduct(product) {
  return arrShoppingList = arrShoppingList.filter(item => item.productName !== product);
}

deletedProductInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    deleteProduct(deletedProductInput.value);
    shoppingList.innerHTML = '';
    getSortedShoppingList();
    showList();
  }
});

// 3. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку
// продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову.
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12,
// а кількості товарів стало 2, то сума буде 24.

function addProduct(product, amount, price) {
  let existingProduct = arrShoppingList.find(item => item.productName === product);
  if (existingProduct) {
    existingProduct.amount += 1;
    existingProduct.total += existingProduct.price;
  } else {
    arrShoppingList.unshift({productName: product, amount: amount, price: price, isBought: false, total: amount*price});
  }
};

button.addEventListener("click", () => {
  let product = addProductNameInput.value;
  let amount = Number(addProductAmountInput.value);
  let price = Number(addProductPriceInput.value);
  addProduct(product, amount, price);
  shoppingList.innerHTML = '';
  showList();
});