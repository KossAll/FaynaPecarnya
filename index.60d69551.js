document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".cart_overlay"),t=document.getElementById("cart_content"),n=document.getElementById("checkout"),r=document.getElementById("clear_cart");function c(){return JSON.parse(localStorage.getItem("cartItems"))||[]}function a(e){localStorage.setItem("cartItems",JSON.stringify(e))}function i(){t.innerHTML="";var n=c();if(0!==n.length){e.style.display="block",n.forEach((function(e){var r=document.createElement("div");r.classList.add("cart_item_box");var c=document.createElement("h3");c.innerText=e.name;var d=document.createElement("span");d.innerText="Кількість: ".concat(e.quantity);var o=document.createElement("span");o.innerText="Ціна: ".concat(e.price,"$"),r.appendChild(c),r.appendChild(d),r.appendChild(o);var l=document.createElement("button");l.innerText="+",l.addEventListener("click",(function(){e.quantity++,a(n),i()}));var u=document.createElement("button");u.innerText="-",u.addEventListener("click",(function(){e.quantity>1&&(e.quantity--,a(n),i())})),r.appendChild(l),r.appendChild(u),t.appendChild(r)}));var r=function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}(n),d=document.createElement("div");d.innerHTML="<h2>Загальна вартість товарів: ".concat(r,"$</h2>"),t.appendChild(d)}else e.style.display="none"}function d(){localStorage.removeItem("cartItems"),i()}document.querySelectorAll(".add_item").forEach((function(e){e.addEventListener("click",(function(){var t,n,r,d=e.closest(".gallery-product-box"),o=d.querySelector(".gallery-poster-title").innerText,l=parseInt(d.querySelector(".gallery-poster-text").innerText),u=parseInt(e.dataset.id);t={id:u,name:o,price:l},n=c(),-1!==(r=n.findIndex((function(e){return e.id===t.id})))?n[r].quantity+=0:(t.quantity=1,n.push(t)),a(n),i()}))})),document.querySelectorAll(".away_item").forEach((function(e){e.addEventListener("click",(function(){var t=parseInt(e.dataset.id);a(c().filter((function(e){return e.id!==t}))),i()}))})),n.addEventListener("click",(function(){alert("Order has been sent to the email!"),d()})),r.addEventListener("click",(function(){d()})),i()}));
//# sourceMappingURL=index.60d69551.js.map
