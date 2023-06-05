

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrolled > 0) {
      navbar.classList.add('scroll');
    } else {
      navbar.classList.remove('scroll');
    }
  });
  



// **** Quick View modal ****//
// Select all elements with the class "my-button"
const buttons = document.querySelectorAll('.viewCart');

// Attach event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let contain=document.querySelector('.contain');
    contain.classList.add('actived')
    
    document.querySelector('#closed').onclick=function(){
        let contains=document.querySelector('.contain');
         contains.classList.remove('actived')
      }
  });
});


/*********add to cart********/
let cartItems = [];
console.log(cartItems)
function addToCart(name, price, image) {
  const item = { name, price, image };
  cartItems.push(item);
  updateCartItemCount();
  renderCartItems();
  console.log(cartItems)
}

function removeCartItem(index) {
  cartItems.splice(index, 1);
  updateCartItemCount();
  renderCartItems();
}

function updateCartItemCount() {
  const cartItemCount = document.getElementById('cartItemCount');
  cartItemCount.textContent = cartItems.length;
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = '';

  let totalQuantity = 0;
  let totalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    totalQuantity += 1;
    totalPrice += item.price;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;
    image.width = 200;
    image.height = 200;
    cartItem.appendChild(image);

    const name = document.createElement('p');
    name.textContent = item.name;
    cartItem.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `$${item.price}`;
    cartItem.appendChild(price);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', () => removeCartItem(i));
    cartItem.appendChild(removeButton);

    cartItemsContainer.appendChild(cartItem);
  }

  const cartSummary = document.getElementById('cartSummary');
  cartSummary.innerHTML = `Total Quantity: ${totalQuantity} | Total Price: $${totalPrice.toFixed(2)}`;
}

function toggleCart() {
  const cartOverlay = document.getElementById('cartOverlay');
  cartOverlay.style.display = cartOverlay.style.display === 'none' ? 'block' : 'none';
}