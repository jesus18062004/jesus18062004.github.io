const products = {
    tennis1: {
        images: {
            front: 'F.jpg',
            left: 'I.jpg',
            right: 'D.jpg',
            back: 'A.jpg',
        },
        description: 'DTenis Para Basquetbol Nike LeBron Witness 8 para Hombre.',
        price: '$2080',
    },
    tennis2: {
        images: {
            front: 'VF.jpg',
            left: 'VI.jpg',
            right: 'VD.jpg',
            back: 'VA.jpg',
        },
        description: 'Tenis Adidas Terrex AX4 verdes Para Hombre.',
        price: '$2000',
    },
    tennis3: {
        images: {
            front: 'NF.jpg',
            left: 'NI.jpg',
            right: 'ND.jpg',
            back: 'NA.jpg',
        },
        description: 'Tenis Nike In-Season TR 13 Para Hombre.',
        price: '$1200',
    },
};

let currentShoe = 'tennis1';

function changeView(view) {
    const productImage = document.getElementById('product-image');
    productImage.src = products[currentShoe].images[view]; // Cambia la imagen según la selección
}

function toggleDescription() {
    const description = document.getElementById('description');
    const productDescription = document.getElementById('product-description');
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
    productDescription.textContent = products[currentShoe].description; // Muestra la descripción correspondiente
}

function highlightPrice() {
    const price = document.getElementById('price');
    price.textContent = `Precio: ${products[currentShoe].price}`; // Muestra el precio correspondiente
    price.classList.toggle('highlight'); // Cambia la clase para resaltar el precio
}

function selectShoe() {
    const selector = document.getElementById('shoe-selector');
    currentShoe = selector.value; // Obtiene el valor seleccionado
    changeView('front'); // Muestra la imagen frontal del nuevo tenis
    toggleDescription(); // Actualiza la descripción
    highlightPrice(); // Actualiza el precio
}
