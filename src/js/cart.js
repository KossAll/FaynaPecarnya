
// var d = document,
//     itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
//     cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// // Функция кроссбраузерной установка обработчика событий
// function addEvent(elem, type, handler){
//   if(elem.addEventListener){
//     elem.addEventListener(type, handler, false);
//   } else {
//     elem.attachEvent('on'+type, function(){ handler.call( elem ); });
//   }
//   return false;
// }
// // Получаем данные из LocalStorage
// function getCartData(){
//   return JSON.parse(localStorage.getItem('cart'));
// }
// // Записываем данные в LocalStorage
// function setCartData(o){
//   localStorage.setItem('cart', JSON.stringify(o));
//   return false;
// }
// // Добавляем товар в корзину
// function addToCart(e){
//   this.disabled = true; // блокируем кнопку на время операции с корзиной
//   var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
//       parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
//       itemId = this.getAttribute('data-id'), // ID товара
//       itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
//       itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара
//   if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
//     cartData[itemId][2] += 1;
//   } else { // если товара в корзине еще нет, то добавляем в объект
//     cartData[itemId] = [itemTitle, itemPrice, 1];
//   }
//   if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
//     this.disabled = false; // разблокируем кнопку после обновления LS
//   }
//  return false;
// }
// // Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
// for(var i = 0; i < itemBox.length; i++){
//   addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
// }
// // // Открываем корзину со списком добавленных товаров
// function openCart(e){
//   var cartData = getCartData(), // вытаскиваем все данные корзины
//       totalItems = '';
//   // если что-то в корзине уже есть, начинаем формировать данные для вывода
//   if(cartData !== null){
//     totalItems = '<table class="shopping_list"><tr><th>Назва</th><th>Ціна</th><th>Кількість</th></tr>';
//     for(var items in cartData){
//       totalItems += '<tr>';
//       for(var i = 0; i < cartData[items].length; i++){
//         totalItems += '<td>' + cartData[items][i] + '</td>';
//       }
//       totalItems += '</tr>';
//     }
//     totalItems += '</table>';
//     cartCont.innerHTML = totalItems;
//   } else {
//     // если в корзине пусто, то сигнализируем об этом
//     cartCont.innerHTML = 'В корзине пусто!';
//   }
//   return false;
// }
// /* Открыть корзину */
// addEvent(d.getElementById('checkout'), 'click', openCart);
// /* Очистить корзину */
// addEvent(d.getElementById('clear_cart'), 'click', function(e){
//   localStorage.removeItem('cart');
//   cartCont.innerHTML = 'Кошик пустий.';
// });


// // Функция отправки заказа на почту
// function sendOrderToEmail() {
//   var cartData = getCartData(); // Получаем данные корзины

//   // Если корзина не пуста
//   if (cartData !== null) {
//     var orderDetails = '';
//     for (var items in cartData) {
//       var itemTitle = cartData[items][0]; // Название товара
//       var itemPrice = cartData[items][1]; // Стоимость товара
//       var itemQuantity = cartData[items][2]; // Количество товара

//       // Формируем строку с деталями заказа
//       orderDetails += itemTitle + ' - ' + itemPrice + ' - ' + itemQuantity + ' шт.\n';
//     }

//     // Здесь замените 'your-email@example.com' на ваш email
//     var recipientEmail = 'wildfow85@gmail.com';
//     var emailSubject = 'Заказ из интернет-магазина';
//     var emailBody = 'Детали заказа:\n\n' + orderDetails;

//     // Создаем ссылку для отправки письма
//     var mailToLink = 'mailto:' + recipientEmail + '?subject=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(emailBody);

//     // Открываем ссылку для отправки письма
//     window.location.href = mailToLink;
//   } else {
//     alert('Корзина пуста! Добавьте товары перед оформлением заказа.');
//   }

//   return false;
// }

// /* Открыть корзину */
// addEvent(d.getElementById('checkout'), 'click', function(e){
//   openCart(e); // Открываем корзину со списком добавленных товаров
//   sendOrderToEmail(); // Отправляем заказ на почту
// });

// function addToCart(e) {
//   this.disabled = true; // блокируем кнопку на время операции с корзиной
//   var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
//       parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
//       itemId = this.getAttribute('data-id'), // ID товара
//       itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
//       itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара
//   if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
//     cartData[itemId][2] += 1;
//   } else { // если товара в корзине еще нет, то добавляем в объект
//     cartData[itemId] = [itemTitle, itemPrice, 1];
//   }
//   if (!setCartData(cartData)) { // Обновляем данные в LocalStorage
//     this.disabled = false; // разблокируем кнопку после обновления LS
//   }

//   // Show the cart content after adding the item
//   openCart(e);

//   return false;
// }

// /* Открыть корзину */
// addEvent(d.getElementById('checkout'), 'click', openCart);


// // Открываем корзину со списком добавленных товаров
// function openCart(e) {
//   var cartData = getCartData(); // вытаскиваем все данные корзины
//   var totalItems = '';
//   var totalPrice = 0; // добавляем переменную для общей суммы покупки

//   // если что-то в корзине уже есть, начинаем формировать данные для вывода
//   if (cartData !== null) {
//     totalItems = '<table class="shopping_list"><tr><th>назва</th><th>ціна</th><th>кількість</th><th>сума</th></tr>';
//     for (var items in cartData) {
//       totalItems += '<tr>';
//       for (var i = 0; i < cartData[items].length; i++) {
//         totalItems += '<td>' + cartData[items][i] + '</td>';
//       }

//       // Calculate and display the individual item amount (price * quantity)
//       var itemPrice = parseFloat(cartData[items][1].replace(/\s+/g, '').replace(',', '.')); // assuming the price format is "123.45" or "123,45"
//       var itemQuantity = cartData[items][2];
//       var itemAmount = itemPrice * itemQuantity;
//       totalItems += '<td>' + itemAmount.toFixed(2) + '</td>';

//       totalItems += '</tr>';

//       // Accumulate the total purchase amount
//       totalPrice += itemAmount;
//     }

//     totalItems += '<tr><td colspan="3"><strong>до сплати:</strong></td><td>' + totalPrice.toFixed(2) + '</td></tr>';
//     totalItems += '</table>';
//     cartCont.innerHTML = totalItems;
//   } else {
//     // если в корзине пусто, то сигнализируем об этом
//     cartCont.innerHTML = 'В корзине пусто!';
//   }
//   return false;
// }


// // Удалить один товар из корзины
// function removeOneItem(itemId) {
//   var cartData = getCartData();

//   if (cartData !== null && cartData.hasOwnProperty(itemId)) {
//     if (cartData[itemId][2] > 1) {
//       cartData[itemId][2] -= 1;
//     } else {
//       delete cartData[itemId];
//     }
//     setCartData(cartData); // Обновляем данные в LocalStorage
//     openCart(); // Обновляем содержимое корзины после удаления товара
//   }
// }

// // Устанавливаем обработчик события на каждую кнопку "Удалить товар"
// var removeButtons = document.querySelectorAll('.away_item');
// for (var i = 0; i < removeButtons.length; i++) {
//   addEvent(removeButtons[i], 'click', function (e) {
//     var itemId = this.getAttribute('data-id');
//     removeOneItem(itemId);
//   });
// }






// var d = document,
//     itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
//     cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// // Функция кроссбраузерной установка обработчика событий



  document.addEventListener('DOMContentLoaded', function () {
    const cartOverlay = document.querySelector('.cart_overlay');
    const cartContent = document.getElementById('cart_content');
    const checkoutBtn = document.getElementById('checkout');
    const clearCartBtn = document.getElementById('clear_cart');

    // функція, щоб отримати елементи кошика з локального зберігання
    function getCartItems() {
      return JSON.parse(localStorage.getItem('cartItems')) || [];
    }

    // функція для оновлення кошика в локальному сховищі
    function updateCart(cartItems) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // функція для обчислення загальної ціни кошика
    function calculateTotal(cartItems) {
      return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    }

    // функція для візуалізації елементів візка
    function renderCart() {
      cartContent.innerHTML = '';
      const cartItems = getCartItems();
      if (cartItems.length === 0) {
        cartOverlay.style.display = 'none';
        return;
      } else {
        cartOverlay.style.display = 'block';
      }

      cartItems.forEach(item => {
        const itemBox = document.createElement('div');
        itemBox.classList.add('cart_item_box');

        const itemName = document.createElement('h3');
        itemName.innerText = item.name;

        const itemQuantity = document.createElement('span');
        itemQuantity.innerText = `Кількість: ${item.quantity}`;

        const itemPrice = document.createElement('span');
        itemPrice.innerText = `Ціна: ${item.price}$`;

        itemBox.appendChild(itemName);
        itemBox.appendChild(itemQuantity);
        itemBox.appendChild(itemPrice);

        const increaseBtn = document.createElement('button');
        increaseBtn.innerText = '+';
        increaseBtn.addEventListener('click', () => {
          item.quantity++;
          updateCart(cartItems);
          renderCart();
        });

        const decreaseBtn = document.createElement('button');
        decreaseBtn.innerText = '-';
        decreaseBtn.addEventListener('click', () => {
          if (item.quantity > 1) {
            item.quantity--;
            updateCart(cartItems);
            renderCart();
          }
        });

        itemBox.appendChild(increaseBtn);
        itemBox.appendChild(decreaseBtn);

        cartContent.appendChild(itemBox);
      });

      const total = calculateTotal(cartItems);
      const totalBox = document.createElement('div');
      totalBox.innerHTML = `<h2>Загальна вартість товарів: ${total}$</h2>`;
      cartContent.appendChild(totalBox);
    }

    // функція для додавання елемента до кошика
    function addToCart(item) {
      const cartItems = getCartItems();
      const existingItemIndex = cartItems.findIndex(i => i.id === item.id);
      if (existingItemIndex !== -1) {
        // Item already exists in the cart, update the quantity directly
        cartItems[existingItemIndex].quantity += 0;
      } else {
        // Item does not exist in the cart, add it with quantity 1
        item.quantity = 1;
        cartItems.push(item);
      }
      updateCart(cartItems);
      renderCart();
    }

    // функція для очищення кошика
    function clearCart() {
      localStorage.removeItem('cartItems');
      renderCart();
    }

    // функція для надсилання замовлення на електронну пошту (необхідна реалізація)
    function sendOrder() {
      // Впровадження надсилання замовлення на електронну пошту тут
      // вам може знадобитися використовувати сценарій на стороні сервера для обробки надсилання електронної пошти
      // Для демонстраційних цілей ми просто покажемо сповіщення
      alert('Order has been sent to the email!');
    }

    // Add event listeners for "до кошика" buttons
    const addToCartButtons = document.querySelectorAll('.add_item');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const itemBox = button.closest('.item_box');
        const itemName = itemBox.querySelector('.item_title').innerText;
        const itemPrice = parseInt(itemBox.querySelector('.item_price').innerText);
        const itemId = parseInt(button.dataset.id);

        addToCart({ id: itemId, name: itemName, price: itemPrice });
      });
    });

    // Add event listener for "видалити" buttons
    const removeFromCartButtons = document.querySelectorAll('.away_item');
    removeFromCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const itemId = parseInt(button.dataset.id);
        const cartItems = getCartItems();
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        updateCart(updatedCartItems);
        renderCart();
      });
    });

    // Add event listener for "Оформити замовлення" button
    checkoutBtn.addEventListener('click', function () {
      sendOrder();
      clearCart();
    });

    // Add event listener for "Очистити кошик" button
    clearCartBtn.addEventListener('click', function () {
      clearCart();
    });

   // Початкова візуалізація кошика
    renderCart();
  });



  



