const urlParam = new URLSearchParams(window.location.search);
const value = urlParam.get("id");
if (!value || !BREW_PRODUCTS.some((product) => product.id == value)) {
  window.location.href = "brewing-equipment.html";
}
const product = BREW_PRODUCTS.find((product) => product.id == value);

let cart = localStorage.getItem("__cart__");
if (!cart) {
  localStorage.setItem("__cart__", JSON.stringify({}));
  cart = {};
} else {
  cart = JSON.parse(cart);
}

const detailsImgEl = document.getElementById("details-img");
const detailsNameEl = document.querySelector(".details-title");
const detailsDescriptionEl = document.querySelector(".details-description");
const detailsPriceEl = document.getElementById("details-price");
const detailsUsageEl = document.getElementById("details-usage");
const addToCartEl = document.getElementById("add-to-cart");
const toastEl = document.getElementById("toast");

detailsImgEl.src = `../images/${product.img}`;
detailsNameEl.textContent = product.name;
detailsDescriptionEl.textContent = product.description;
detailsPriceEl.textContent = `${product.price} ${product.priceSuffix}`;
detailsUsageEl.innerHTML = product.usageTips
  .map((tip) => `<li>- ${tip}</li>`)
  .join("");

addToCartEl.addEventListener("click", () => {
  cart[product.id] = cart[product.id] ? cart[product.id] + 1 : 1;
  localStorage.setItem("__cart__", JSON.stringify(cart));
  toastEl.classList.add("active");
  setTimeout(() => {
    toastEl.classList.remove("active");
  }, 1500);
});
