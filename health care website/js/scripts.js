document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const productId = event.target.dataset.productId;
        const productName = event.target.parentNode.querySelector('h3').textContent;
        const productPrice = event.target.parentNode.querySelector('p').textContent.split(': ')[1];

        const cartItem = {
            id: productId,
            name: productName,
            price: parseFloat(productPrice.replace('$', '')),
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push(cartItem);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    }
});

