fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('products-container');
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="${product.link}" target="_blank">Check this product</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Failed to load products:", err));

