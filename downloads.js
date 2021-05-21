const removeCartItem = event => {
    const buttonClicked = event.target;
    
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    toggleEmptyCart();
}

const addItemToCart = (img, title, price) => {
    const cartRow = document.createElement('div');
    cartRow.classList.add('cart-item');
    const cartItems = document.getElementsByClassName('cart-items')[0];
    const titles = document.querySelectorAll('.item-title');
    for (let i = 0; i < titles.length; i ++) {
        const itemTitle = titles[i];
        if (itemTitle.innerText === title) {
            return
        }
    }

    const cartRowContent = `
        <div class="item">
            <img class="item-image" src=${img} width="100px" alt="product image">
            <p class="item-title">${title}</p>
        </div>
        <div>
            <p class="item-price">${price}</p>
        </div>
        <div>
            <i class="fas fa-trash fa-lg"></i>
        </div>`
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('fa-trash')[0].addEventListener('click', removeCartItem);
    updateCartTotal();
}

const addToCart = event => {
    const buttonClicked = event.target;
    const cartItem = buttonClicked.parentElement.parentElement;
    const itemInfo = buttonClicked.parentElement;
    const img = imgSrc = cartItem.getElementsByClassName('arrangement-image')[0].src;
    const title = itemInfo.getElementsByClassName('arrangement-title')[0].innerText;
    const price = itemInfo.getElementsByClassName('price')[0].innerText;

    const removeButtons = document.getElementsByClassName('fa-trash');
    for (let i = 0; i < removeButtons.length; i++) {
        const button = removeButtons[i];
        
        button.addEventListener('click', removeCartItem)
    }    

    addItemToCart(img, title, price);
    toggleEmptyCart();
}

const clearCart = () => {
    const cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
    toggleEmptyCart();
}

const checkoutClicked = () => {
    clearCart();
}

const updateCartTotal = () => {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0];
    const cartRows = cartItemContainer.getElementsByClassName('cart-item');
    let subTotal = 0;
    let taxRate = 0.07;
    let tax = 0;
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName('item-price')[0];
        const price = parseFloat(priceElement.innerText.replace('$', ''))
        subTotal += price;
        tax = price * taxRate * cartRows.length;
        total = subTotal + tax;
    }
    document.getElementById('sub-total').innerText = subTotal.toFixed(2);
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}

const toggleEmptyCart = () => {
    const cartContainer = document.querySelector('.cart-container');
    const emptyCart = document.querySelector('.empty-cart');
    const cartItems = document.getElementsByClassName('cart-items')[0];
    const cartItem = cartItems.getElementsByClassName('cart-item')[0];

    if (cartItem) {
        emptyCart.style.display = 'none';
        cartContainer.style.display = 'block';
    } else {
        cartContainer.style.display = 'none';
        emptyCart.style.display = 'block';
    }
}

const removeButtons = document.getElementsByClassName('fa-trash');
for (let i = 0; i < removeButtons.length; i++) {
    const button = removeButtons[i];
    
    button.addEventListener('click', removeCartItem)
}

const addButtons = document.getElementsByClassName('add');
for (let i = 0; i < addButtons.length; i++) {
    const button = addButtons[i];

    button.addEventListener('click', addToCart)
}

const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', checkoutClicked);

const clearButton = document.getElementById('clear-cart-button');
clearButton.addEventListener('click', clearCart);

document.addEventListener('onload', toggleEmptyCart())