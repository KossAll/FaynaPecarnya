export const galleryCategory1 = [
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
    name:'Cлойка з ',
    price: '20',
    id: '3',
  },
];


const shopCcontainer = document.querySelector(".gallery-shop")
const marcap = galleryCategory1.map(({ image, name, price, id }) =>
    `
      <div class="gallery-product-box">
        <div class="gallery-product">
          <img
            class="gallery-product-img"
            src="${image}"
            alt=""
                />
        </div>
    <h2 class="gallery-poster-title" data-id="${id}">${name}</h2>
    <div class="gallery-poster-description">
      <p class="gallery-poster-text" >${price}</p>
    </div>
    <button class="button-shop">Додати в корзину</button>
    </div>`).join('');
    shopCcontainer.insertAdjacentHTML('beforeend',marcap)
console.log(marcap)
;