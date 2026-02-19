script.js

let allProducts = [];

fetch('products.json')
    .then(response => response.json())
    .then(products => {
        allProducts = products;
        displayProducts(products);
    });

function displayProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="${product.link}" target="_blank">Check This Product</a>
        `;

        container.appendChild(card);
    });
}

document.getElementById('searchBar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();

    const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    displayProducts(filtered);
});
