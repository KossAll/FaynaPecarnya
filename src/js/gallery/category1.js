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



const galleryCategory1 = [
  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка o',
    price: '18',
    id: '1',
  },
  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка з',
    price: '20',
    id: '2',
  },

  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 3',
    price: '25',
    id: '2',
  },

  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 5',
    price: '25',
    id: '2',
  },

  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 5',
    price: '5',
    id: '2',
  },

  {
    image: "./images/section-business/піца 2.jpg",
    name:'Cлойка 7',
    price: '25',
    id: '2',
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
      <h2 class="gallery-poster-title" data-id="${id}">${name}</h2>
      <div class="gallery-poster-description">
        <p class="gallery-poster-text">${price}</p>
      </div>
      <button class="button-shop">Додати в корзину</button>
    </div>
  `).join('');

  shopContainer.innerHTML = marcap;
}

function handleSortChange(event) {
  const selectedValue = event.target.value;

  if (selectedValue === 'all') {
    renderProducts(galleryCategory1);
  } else {
    const sortedProducts = galleryCategory1.filter(product => product.name === selectedValue);
    renderProducts(sortedProducts);
  }
}

sortingButtons.forEach(button => {
  button.addEventListener('change', handleSortChange);
});

// Initial render
renderProducts(galleryCategory1);





