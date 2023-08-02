// export const galleryCategory1 = [
//   {
//     image: "./images/section-business/піца 2.jpg",
//     name:'Cлойка o',
//     price: '18',
//     id: '1',
//   },
//    {
//     image: "./images/section-business/піца 2.jpg",
//     name:'Cлойка з',
//     price: '20',
//     id: '2',
//     },
//    {
//     image: "./images/section-business/піца 2.jpg",
//     name:'Cлойка з ',
//     price: '20',
//     id: '3',
//   },
// ];


// const shopCcontainer = document.querySelector(".gallery-shop")
// const marcap = galleryCategory1.map(({ image, name, price, id }) =>
//     `
//       <div class="gallery-product-box">
//         <div class="gallery-product">
//           <img
//             class="gallery-product-img"
//             src="${image}"
//             alt=""
//                 />
//         </div>
//     <h2 class="gallery-poster-title" data-id="${id}">${name}</h2>
//     <div class="gallery-poster-description">
//       <p class="gallery-poster-text" >${price}</p>
//     </div>
//     <button class="button-shop">Додати в корзину</button>
//     </div>`).join('');
// shopCcontainer.insertAdjacentHTML('beforeend', marcap);



export const galleryCategory1 = [
  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 1',
    price: '18',
    id: '1',
  },
  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 2',
    price: '20',
    id: '7',
  },

  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 3',
    price: '25',
    id: '6',
  },

  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 4',
    price: '25',
    id: '5',
  },

  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 5',
    price: '5',
    id: '4',
  },

  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 6',
    price: '25',
    id: '3',
  },
  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 7',
    price: '5',
    id: '2',
  },
  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 7',
    price: '10',
    id: '2',
  },

];

const shopContainer = document.querySelector(".gallery-shop");
const sortingButtons = document.querySelectorAll('input[name="sort"]');

function renderProducts(products) {
  const marcap = products.map(({ image, name, price, id }) =>
    `
    <div class="gallery-product-box">
      <div class="gallery-product">
        <img class="gallery-product-img" src="${image}" alt="">
      </div>
      <h2 class="gallery-poster-title">${name}</h2>
      <div class="gallery-poster-description">
        <p class="gallery-poster-text">${price}</p>
      </div>
      <button class="button-shop  add_item" data-id="${id}">Додати в корзину</button>
      <button class="button-shop  away_item" data-id="${id}">Видалити</button>
    </div>
  `).join('');
 
  shopContainer.innerHTML = marcap;
}

function handleSortChange(event) {
  const selectedValue = event.target.value;

  if (selectedValue !== 'all') {
       const sortedProducts = galleryCategory1.filter(product => product.name === selectedValue);
    renderProducts(sortedProducts);
    return
   
  } else {
    renderProducts(galleryCategory1)
  }
}

sortingButtons.forEach(button => {
  button.addEventListener('change', handleSortChange);
});

renderProducts(galleryCategory1)




