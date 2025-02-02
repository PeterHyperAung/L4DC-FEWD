const urlParam = new URLSearchParams(window.location.search);
const value = urlParam.get("id");
if (!value || !COFFEE_PRODUCTS.some((product) => product.id == value)) {
  window.location.href = "coffee-selection.html";
}
const product = COFFEE_PRODUCTS.find((product) => product.id == value);

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
const detailsTastingEl = document.getElementById("details-tasting");
const detailsDeviceEl = document.getElementById("details-device");
const detailsComponentEl = document.getElementById("details-component");
const detailsStepEl = document.getElementById("details-step");
const addToCartEl = document.getElementById("add-to-cart");
const toastEl = document.getElementById("toast");

detailsImgEl.src = `../images/${product.img}`;
detailsNameEl.textContent = product.name;
detailsDescriptionEl.textContent = product.description;
detailsPriceEl.textContent = `${product.price} ${product.priceSuffix}`;
detailsTastingEl.innerHTML = product.tastingNotes
  .map((note) => `<li>- ${note}</li>`)
  .join("");
detailsDeviceEl.textContent = product.device;
detailsComponentEl.innerHTML = product.component
  .map((component) => `<li>- ${component}</li>`)
  .join("");
detailsStepEl.innerHTML = product.step
  .map((step, idx) => `<li>${idx + 1}. ${step}</li>`)
  .join("");

addToCartEl.addEventListener("click", () => {
  cart[product.id] = cart[product.id] ? cart[product.id] + 1 : 1;
  localStorage.setItem("__cart__", JSON.stringify(cart));
  toastEl.classList.add("active");
  setTimeout(() => {
    toastEl.classList.remove("active");
  }, 1500);
});
