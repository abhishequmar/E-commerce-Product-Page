// Image Buttons
const image1_button = document.getElementById("image1");
const image2_button = document.getElementById("image2");
const image3_button = document.getElementById("image3");
const image4_button = document.getElementById("image4");
const image_modal_button = document.getElementById("image_modal_button");
const view_cart_button = document.getElementById("view_cart_button");
const add_to_cart = document.getElementById("add_to_cart");

// Modal
var myModal = new bootstrap.Modal(document.getElementById("imageModal"));
var cartModal = new bootstrap.Modal(document.getElementById("cartModal"));

// Modal Buttons
const modal_image1_button = document.getElementById("modal_image1");
const modal_image2_button = document.getElementById("modal_image2");
const modal_image3_button = document.getElementById("modal_image3");
const modal_image4_button = document.getElementById("modal_image4");
const modal_left_arrow_button = document.getElementById(
  "modal_left_arrow_button"
);
const modal_right_arrow_button = document.getElementById(
  "modal_right_arrow_button"
);
const remove_item_button = document.getElementById("remove_item_button");

// image urlarray
const images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

// cur image being displayed
var current_modal_image_index = 0;

// No. of shoes ordered
var order_quantity = 0;
var cart_quantity = 0;

const decrease_button = document.getElementById(
  "decrease_order_quantity_button"
);
const increase_button = document.getElementById(
  "increase_order_quantity_button"
);

// Image Event Listeners

image1_button.addEventListener("click", function () {
  document.getElementById("main_image").src = images[0];
});

image2_button.addEventListener("click", function () {
  document.getElementById("main_image").src = images[1];
});

image3_button.addEventListener("click", function () {
  document.getElementById("main_image").src = images[2];
});

image4_button.addEventListener("click", function () {
  document.getElementById("main_image").src = images[3];
});
image_modal_button.addEventListener("click", function () {
  myModal.show();
});
view_cart_button.addEventListener("click", function () {
  cartModal.show();
});

// Modal Event Listeners

modal_image1_button.addEventListener("click", function () {
  document.getElementById("modal_main_image").src = images[0];
  current_modal_image_index = 0;
});

modal_image2_button.addEventListener("click", function () {
  document.getElementById("modal_main_image").src = images[1];
  current_modal_image_index = 1;
});

modal_image3_button.addEventListener("click", function () {
  document.getElementById("modal_main_image").src = images[2];
  current_modal_image_index = 2;
});

modal_image4_button.addEventListener("click", function () {
  document.getElementById("modal_main_image").src = images[3];
  current_modal_image_index = 3;
});

modal_left_arrow_button.addEventListener("click", function () {
  current_modal_image_index += 1;
  current_modal_image_index %= 4;
  document.getElementById("modal_main_image").src =
    images[current_modal_image_index];
});

modal_right_arrow_button.addEventListener("click", function () {
  current_modal_image_index += 1;
  current_modal_image_index %= 4;
  document.getElementById("modal_main_image").src =
    images[current_modal_image_index];
});

decrease_button.addEventListener("click", function () {
  order_quantity -= 1;
  order_quantity = Math.max(order_quantity, 0);
  document.getElementById("order_quantity").innerText = order_quantity;
  document.getElementById("cart_quantity").innerText = order_quantity;
});
increase_button.addEventListener("click", function () {
  order_quantity += 1;
  document.getElementById("order_quantity").innerText = order_quantity;
});

add_to_cart_button.addEventListener("click", function () {
  cart_quantity = order_quantity;
  document.getElementById("modal_quantity").innerText = cart_quantity;
  document.getElementById("modal_price").innerText = 125 * cart_quantity;
  document.getElementById("cart_quantity").innerText = cart_quantity;
});

remove_item_button.addEventListener("click", function () {
  cart_quantity = 0;
  document.getElementById("modal_quantity").innerText = cart_quantity;
  document.getElementById("modal_price").innerText = 125 * cart_quantity;
  document.getElementById("cart_quantity").innerText = cart_quantity;
});
