import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";


// to get the cart data from localStorage
// to update the cart value and also to get the data always ready from localStorage

getCartProductFromLS();





export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;

  price = price.replace("₹", "");
  quantity = Number(quantity);
  price = Number(price) * quantity;

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd) {
    // If product already exists, update its quantity and price
    const updatedCart = arrLocalStorageProduct.map((curProd) => {
      if (curProd.id === id) {
        const newQuantity = curProd.quantity + quantity;
        const newPrice = (price / quantity) * newQuantity; // keep unit price consistent
        return { ...curProd, quantity: newQuantity, price: newPrice };
      }
      return curProd;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    updateCartValue(updatedCart);
    showToast("add", id);
    return;
  }

  // If product doesn't exist in cart
  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
  showToast("add", id);
};

