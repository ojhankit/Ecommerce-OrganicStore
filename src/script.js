const products = [
    {
        image: "../asset/coffee-asorted-300x300 (1).jpg",
        type: "Groceries",
        name: "Assorted Coffee",
        price: "50.00"
    },
    {
        image: "../asset/edible-oil-300x300.jpg",
        type: "Groceries",
        name: "Edible Oil",
        price: "130.00"
    },
    {
        image: "../asset/sanitizer-300x300.jpg",
        type: "Groceries",
        name: "Sanitizer",
        price: "80.00"
    },
    {
        image: "../asset/Butter.jpg",
        type: "Groceries",
        name: "Butter",
        price: "80.00"
    },
    {
        image: "../asset/cookie.jpg",
        type: "Groceries",
        name: "Diabetic-Cookie",
        price: "80.00"
    },
    {
        image: "../asset/eggs.jpg",
        type: "Groceries",
        name: "Eggs",
        price: "100.00"
    },
    {
        image: "../asset/facewash.jpg",
        type: "Groceries",
        name: "FaceWash",
        price: "100.00"
    },
    {
        image: "../asset/honey.jpg",
        type: "Groceries",
        name: "Honey",
        price: "100.00"
    },
    {
        image: "../asset/pulses.jpg",
        type: "Groceries",
        name: "Pulses",
        price: "140.00"
    },
    {
        image: "../asset/wheat.jpg",
        type: "Groceries",
        name: "Wheat",
        price: "300.00"
    }
];
const query = document.getElementById("query");
        const btn = document.getElementById('btn');
        const productContainer = document.querySelector(".products");

        btn.addEventListener('click', function() {
            let value = query.value;
            let value_lower_case = value.toLowerCase();
            let value_trimmed = value_lower_case.trim();

            let filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(value_trimmed) ||
                product.type.toLowerCase().includes(value_trimmed)
            );

            displayProducts(filteredProducts);
        });

        function displayProducts(products) {
            productContainer.innerHTML = "";
            products.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("item");
                productElement.innerHTML = `
                    <div class="img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <p>${product.type}</p>
                        <p><strong>${product.name}</strong></p>
                        <i class="fa-solid fa-indian-rupee-sign"><span>${product.price}</span></i>
                    </div>
                `;
                productContainer.appendChild(productElement);
            });
        }
