// Lista de productos simulada (puedes obtener de una base de datos o API)
const productos = [
    { id: 1, nombre: 'Botines', precio: 99.99 },
    { id: 2, nombre: 'Zapatos para damas', precio: 79.99 },
    { id: 3, nombre: 'Zapato para damas', precio: 69.69 },
    { id: 4, nombre: 'Botas Marrones', precio: 56.00 },
    { id: 5, nombre: 'Botas Negras', precio: 74.50 }
];

let carrito = [];

function agregarAlCarrito(productoId) {
    // Encontrar el producto por su ID
    const producto = productos.find(p => p.id === productoId);

    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    } else {
        console.log('Producto no encontrado');
    }
}

function quitarDelCarrito(productoId) {
    carrito = carrito.filter(p => p.id !== productoId);
    actualizarCarrito();
}

function actualizarCarrito() {
    // Mostrar los productos en el carrito y calcular el total
    let total = 0;
    const carritoElement = document.getElementById('listaCarrito');
    carritoElement.innerHTML = '';

    carrito.forEach((producto) => {
        total += producto.precio;
        carritoElement.innerHTML += `
            <li>
                ${producto.nombre} - $${producto.precio.toFixed(2)}
                <button onclick="quitarDelCarrito(${producto.id})">Quitar</button>
            </li>
        `;
    });

    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}

// No se agregan productos al cargar la página