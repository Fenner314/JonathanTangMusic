const pdfs = [
    {
        id: '1',
        name: 'This is the title 1',
        link: 'jonathantangmusic.com/sales/This is the title 2.pdf'
    },
    {
        id: '2',
        name: 'This is the title 2',
        link: 'jonathantangmusic.com/sales/This is the title 2.pdf'
    },
    {
        id: '3',
        name: 'This is the title 3',
        link: 'jonathantangmusic.com/sales/This is the title 3.pdf'
    },
    {
        id: '4',
        name: 'This is the title 4',
        link: 'jonathantangmusic.com/sales/This is the title 4.pdf'
    },
    {
        id: '5',
        name: 'This is the title 5',
        link: 'jonathantangmusic.com/sales/This is the title 5.pdf'
    },
]
console.log(process.env)

const removeCartItem = event => {
    const buttonClicked = event.target;
    
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    toggleEmptyCart();
}

const addItemToCart = (img, title, price, id, link) => {
    const cartRow = document.createElement('div');
    cartRow.classList.add('cart-item');
    cartRow.setAttribute('id', id);
    const cartItems = document.getElementsByClassName('cart-items')[0];
    const titles = document.querySelectorAll('.item-title');
    for (let i = 0; i < titles.length; i ++) {
        const itemTitle = titles[i];
        if (itemTitle.innerText === title) {
            return
        }
    }

    const cartRowContent = `
        <div class="item" id=${id}>
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

const getItemLinks = () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const cartItemsArray = Array.from(cartItems);
    const links = document.querySelector('.purchased-links');
    cartItemsArray.forEach(item => {
        pdfs.forEach(pdf => {
            if (item.id === pdf.id) {
                const link = pdf.link;
                const name = pdf.name;
                console.log(link);
                links.innerHTML += `
                    <a href=${link} target="_blank">${name}</a><br />
                `
            }
        })
    })

    showPurchase();
}

const showPurchase = () => {
    const linksContainer = document.querySelector('.overlay');
    const reOpenContainer = document.querySelector('.re-open');
    linksContainer.classList.add('overlay-active');
    reOpenContainer.classList.remove('d-none');
}

const hidePurchase = () => {
    const linksContainer = document.querySelector('.overlay');
    linksContainer.classList.remove('overlay-active');
}

const closeButton = document.querySelector('.links-close');
const reOpen = document.getElementById('open');
closeButton.addEventListener('click', hidePurchase);
reOpen.addEventListener('click', showPurchase);

const addToCart = event => {
    const buttonClicked = event.target;
    const cartItem = buttonClicked.parentElement.parentElement;
    const itemInfo = buttonClicked.parentElement;
    const img = imgSrc = cartItem.getElementsByClassName('arrangement-image')[0].src;
    const title = itemInfo.getElementsByClassName('arrangement-title')[0].innerText;
    const price = itemInfo.getElementsByClassName('price')[0].innerText;
    const id = cartItem.id;
    const link = `jonathantangmusic.com/sales/${title}.pdf`

    const removeButtons = document.getElementsByClassName('fa-trash');
    for (let i = 0; i < removeButtons.length; i++) {
        const button = removeButtons[i];
        
        button.addEventListener('click', removeCartItem)
    }    

    addItemToCart(img, title, price, id, link);
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

const emptyCartAfterPayment = () => {
    const cartContainer = document.querySelector('.cart-container');
    const emptyCart = document.querySelector('.empty-cart');
    cartContainer.style.display = 'none';
    emptyCart.style.display = 'block';

    clearCart();
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

const checkoutButtons = document.getElementsByClassName('paypal-button');
console.log(checkoutButtons)
// checkoutButton.addEventListener('click', checkoutClicked);

const clearButton = document.getElementById('clear-cart-button');
clearButton.addEventListener('click', clearCart);

document.addEventListener('onload', toggleEmptyCart());

// This function displays Smart Payment Buttons on your web page
paypal.Buttons({
    createOrder: function(data, actions) {
        const total = document.getElementById('total').innerText
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
            purchase_units: [{
            amount: {
                value: total
            }
            }],
            application_context: {
                shipping_preference: 'NO_SHIPPING'
            }
        });
    },
    onApprove: function(data, actions) {        
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function(details) {
            // This function shows a transaction success message to your buyer.
            // alert('Transaction completed by ' + details.payer.name.given_name);
            getItemLinks();
            emptyCartAfterPayment();
        });
    }
    // shipping_preference: NO_SHIPPING
}).render('#paypal-button-container');


// curl --request POST \
// --url https://api.sendgrid.com/v3/mail/send \
// --header 'Authorization: Bearer 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' \
// --header 'Content-Type: application/json' \
// --data '{"personalizations":[{"to":[{"email":"jacobgfenner@gmail.com","name":"John Doe"}],"subject":"Hello, World!"}],"content": [{"type": "text/plain", "value": "Heya!"}],"from":{"email":"jacobgfenner@gmail.com","name":"Sam Smith"},"reply_to":{"email":"jacobgfenner@gmail.com","name":"Sam Smith"}}'
