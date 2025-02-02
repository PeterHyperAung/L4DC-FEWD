const cart = localStorage.getItem("__cart__");
let cartData;
const cartResultEl = document.getElementById("cart-body");

if (!cart && Object.entries(JSON.parse(cart)).length === 0) {
  renderEmptyList();
} else {
  cartData = JSON.parse(cart);
  renderProductList();
  renderTotalPrice();

  document.querySelectorAll(".quantity-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const value = parseInt(e.target.value);
      const id = e.target.getAttribute("data-id");
      const product = BOTH_PRODUCTS.find((product) => product.id == id);
      cartData[id] = value;
      const price = (product.price * value).toFixed(2);
      document.getElementById(`cart-price-${id}`).textContent = price;
      localStorage.setItem("__cart__", JSON.stringify(cartData));
      renderTotalPrice();
    });
  });
}

function removeFromCart(id) {
  delete cartData[id];
  localStorage.setItem("__cart__", JSON.stringify(cartData));
  renderProductList();
  renderTotalPrice();
}

function renderTotalPrice() {
  const totalPrice = Object.entries(cartData).reduce((acc, [id, value]) => {
    const product = BOTH_PRODUCTS.find((product) => product.id == id);
    return acc + product.price * value;
  }, 0);
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

function renderEmptyList() {
  cartResultEl.innerHTML =
    "<tr><td colspan='6' class='text-center'>No items in cart</td></tr>";
  localStorage.setItem("__cart__", "{}");
}

function renderProductList() {
  if (Object.entries(cartData).length === 0) {
    renderEmptyList();
    return;
  }
  cartResultEl.innerHTML = Object.entries(cartData)
    .map(([id, value], idx) => {
      console.log(id, value);
      const product = BOTH_PRODUCTS.find((product) => product.id == id);

      console.log(product);
      return `
        <tr>
            <td>${idx + 1}</td>
            <td>${product.name}</td>
            <td>
            <img
                src="../images/${product.img}"
                alt="${`${product.price} ${product.priceSuffix}`}"
                class='cart-img'
                />
            </td>
            <td>
            <input
                type="number"
                name="quantity"
                id="quantity"
                class="quantity-input"
                data-id="${product.id}"
                value="${value}"
                min="1"
            />
            </td>
            <td id="cart-price-${product.id}">${(value * product.price).toFixed(
        2
      )}</td>
        <td>
            <button type="button" class="remove-icon" onclick="removeFromCart(${
              product.id
            })">
                <img src="../images/trash.svg" alt="Trash can icon" width='20' height='20' />
            </button>
        </td>
        </tr>
    `;
    })
    .join(" ");
}
