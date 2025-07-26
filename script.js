// Base de datos de productos
const productos = [
    {
        id: 1,
        nombre: "Ventiladores de pedestal 18 pulgadas",
        imagen: "ventilador_40.jpeg",
        precio: 50,
        stock: 4,
        categoria: "ventiladores",
        descripcion: "Ventiladores de pedestal de 18 pulgadas.\nGarantia de 3 meses. \nMensajeria incluida segun el lugar."
    },
    {
        id: 2,
        nombre: "Ventilador industrial de pared",
        imagen: "ventilador_180.jpeg",
        precio: 190,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador industrial de pared. Garantia de 1 mes. Mensajeria incluida segun el lugar."
    },
    {
        id: 3,
        nombre: "Ventiladores recargables Milexus",
        imagen: "ventilador_140.jpeg",
        precio: 160,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventiladores recargables Milexus. Es la caja de dos ventiladores, no se venden por separado. Mensajeria por un costo adicional."
    },
    {
        id: 4,
        nombre: "Ventilador recargable JMD",
        imagen: "ventilador_62.jpeg",
        precio: 72,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador recargable JMD. Bateria de litio. La carga le dura minimo 10 horas en velocidad maxima. Mensajeria por un costo adicional."
    },
    {
        id: 5,
        nombre: "Ventilador recargable Royal 12",
        imagen: "ventilador_60.jpeg",
        precio: 70,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador recargable Royal 12. Mensajeria por un costo adicional."
    },
    {
        id: 6,
        nombre: "Ventilador recargable F6",
        imagen: "ventilador_85.jpeg",
        precio: 95,
        stock: 1,
        categoria: "ventiladores",
        descripcion: "Ventilador recargable F6. Mensajeria por un costo adicional."
    },
    {
        id: 7,
        nombre: "Microondas Panasonic 30L",
        imagen: "microondas.jpg",
        precio: 3500,
        stock: 10,
        categoria: "cocina",
        descripcion: "Microondas con grill y 10 niveles de potencia."
    },
    {
        id: 8,
        nombre: "Licuadora Oster Xpert Series",
        imagen: "licuadora.jpg",
        precio: 1800,
        stock: 15,
        categoria: "pequeños",
        descripcion: "Licuadora profesional de 1200W con vaso de vidrio."
    }
];

// Variables globales
let carrito = [];
let filtroCategoria = 'todos';
let terminoBusqueda = '';

// Elementos del DOM
const productosContainer = document.querySelector('.productos');
const carritoIcon = document.querySelector('.carrito-icon');
const contadorCarrito = document.getElementById('contador-carrito');
const modalProducto = document.getElementById('modal-producto');
const modalCarrito = document.getElementById('modal-carrito');
const modalCliente = document.getElementById('modal-cliente');
const itemsCarrito = document.getElementById('items-carrito');
const totalCarrito = document.getElementById('total-carrito');
const formularioCliente = document.getElementById('formulario-cliente');

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    setupEventListeners();
});

// Renderizar productos
function renderizarProductos() {
    productosContainer.innerHTML = '';

    const productosFiltrados = productos.filter(producto => {
        const coincideCategoria = filtroCategoria === 'todos' || producto.categoria === filtroCategoria;
        const coincideBusqueda = producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                               producto.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase());
        return coincideCategoria && coincideBusqueda;
    });

    if (productosFiltrados.length === 0) {
        productosContainer.innerHTML = '<p class="no-resultados">No se encontraron productos</p>';
        return;
    }

    productosFiltrados.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        productoElement.innerHTML = `
            <img src="img/${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p class="precio">${producto.precio.toLocaleString()} USD</p>
                <button class="btn-ver-detalles" data-id="${producto.id}">Ver detalles</button>
            </div>
        `;
        productosContainer.appendChild(productoElement);
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Filtros de categoría
    document.querySelectorAll('.categoria-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.categoria-btn.active').classList.remove('active');
            btn.classList.add('active');
            filtroCategoria = btn.dataset.categoria;
            renderizarProductos();
        });
    });

    // Buscador
    document.getElementById('busqueda').addEventListener('input', (e) => {
        terminoBusqueda = e.target.value;
        renderizarProductos();
    });

    document.getElementById('btn-buscar').addEventListener('click', () => {
        renderizarProductos();
    });

    // Ver detalles del producto
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-ver-detalles')) {
            const id = parseInt(e.target.dataset.id);
            const producto = productos.find(p => p.id === id);
            abrirModalProducto(producto);
        }
    });

    // Carrito icon
    carritoIcon.addEventListener('click', abrirModalCarrito);

    // Cerrar modales
    document.querySelectorAll('.modal-cerrar').forEach(btn => {
        btn.addEventListener('click', cerrarModales);
    });

    // Vaciar carrito
    document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

    // Pagar carrito
    document.getElementById('pagar-carrito').addEventListener('click', () => {
        if (carrito.length === 0) {
            alert('El carrito está vacío');
            return;
        }
        modalCarrito.style.display = 'none';
        modalCliente.style.display = 'block';
    });

    // Enviar formulario
    formularioCliente.addEventListener('submit', enviarPedidoWhatsApp);

    // Clic fuera del modal para cerrar
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            cerrarModales();
        }
    });
}

// Modal producto
function abrirModalProducto(producto) {
    document.getElementById('imagen-modal').src = `img/${producto.imagen}`;
    document.getElementById('nombre-modal').textContent = producto.nombre;
    document.getElementById('precio-modal').textContent = `${producto.precio.toLocaleString()} USD`;
    document.getElementById('descripcion-modal').textContent = producto.descripcion;
    document.getElementById('cantidad-modal').value = 1;
    document.getElementById('cantidad-modal').max = producto.stock;

    // Configurar botones de cantidad
    document.getElementById('decrementar').onclick = () => {
        const input = document.getElementById('cantidad-modal');
        if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
    };

    document.getElementById('incrementar').onclick = () => {
        const input = document.getElementById('cantidad-modal');
        if (parseInt(input.value) < producto.stock) input.value = parseInt(input.value) + 1;
    };

    // Configurar botón añadir al carrito
    document.getElementById('añadir-carrito').onclick = () => {
        const cantidad = parseInt(document.getElementById('cantidad-modal').value);
        añadirAlCarrito(producto, cantidad);
        cerrarModales();
    };

    modalProducto.style.display = 'block';
}

// Modal carrito
function abrirModalCarrito() {
    itemsCarrito.innerHTML = '';

    if (carrito.length === 0) {
        itemsCarrito.innerHTML = '<p>El carrito está vacío</p>';
        totalCarrito.textContent = '0';
    } else {
        carrito.forEach((item, index) => {
            const producto = productos.find(p => p.id === item.id);
            const itemElement = document.createElement('div');
            itemElement.classList.add('carrito-item');
            itemElement.innerHTML = `
                <img src="img/${producto.imagen}" alt="${producto.nombre}">
                <div class="carrito-item-info">
                    <h4>${producto.nombre}</h4>
                    <p>${item.cantidad} x ${producto.precio.toLocaleString()} USD</p>
                    <p>Subtotal: ${(item.cantidad * producto.precio).toLocaleString()} USD</p>
                </div>
                <span class="carrito-item-eliminar" data-index="${index}"><i class="fas fa-trash"></i></span>
            `;
            itemsCarrito.appendChild(itemElement);
        });

        // Calcular total
        const total = carrito.reduce((sum, item) => {
            const producto = productos.find(p => p.id === item.id);
            return sum + (item.cantidad * producto.precio);
        }, 0);
        totalCarrito.textContent = total.toLocaleString();

        // Configurar botones eliminar
        document.querySelectorAll('.carrito-item-eliminar').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                eliminarDelCarrito(index);
            });
        });
    }

    modalCarrito.style.display = 'block';
}

// Funciones del carrito
function añadirAlCarrito(producto, cantidad) {
    const itemExistente = carrito.find(item => item.id === producto.id);

    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            id: producto.id,
            cantidad: cantidad
        });
    }

    actualizarContadorCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarContadorCarrito();
    abrirModalCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarContadorCarrito();
    abrirModalCarrito();
}

function actualizarContadorCarrito() {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    contadorCarrito.textContent = totalItems;
}

// Cerrar todos los modales
function cerrarModales() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Enviar pedido por WhatsApp
function enviarPedidoWhatsApp(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre-cliente').value;
    const telefono = document.getElementById('telefono-cliente').value;
    const email = document.getElementById('email-cliente').value;
    const direccion = document.getElementById('direccion-cliente').value;

    // Validar datos
    if (!nombre || !telefono || !direccion) {
        alert('Por favor complete los campos obligatorios (Nombre, Teléfono y Dirección)');
        return;
    }

    // Crear mensaje
    let mensaje = `*Nuevo Pedido ElectroHome*%0A%0A`;
    mensaje += `*Cliente:* ${nombre}%0A`;
    mensaje += `*Teléfono:* ${telefono}%0A`;
    if (email) mensaje += `*Email:* ${email}%0A`;
    mensaje += `*Dirección:* ${direccion}%0A%0A`;
    mensaje += `*Detalles del Pedido:*%0A`;

    carrito.forEach(item => {
        const producto = productos.find(p => p.id === item.id);
        mensaje += `- ${producto.nombre} (${item.cantidad} x ${producto.precio.toLocaleString()} USD) = ${(item.cantidad * producto.precio).toLocaleString()} USD%0A`;
    });

    const total = carrito.reduce((sum, item) => {
        const producto = productos.find(p => p.id === item.id);
        return sum + (item.cantidad * producto.precio);
    }, 0);

    mensaje += `%0A*Total:* ${total.toLocaleString()} USD%0A%0A`;
    mensaje += `_Pedido generado desde la tienda online_`;

    // Enviar por WhatsApp
    const numeroWhatsApp = '+5355245080';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // Abrir en nueva pestaña para desktop
    if (window.innerWidth > 768) {
        window.open(urlWhatsApp, '_blank');
    }
    // Abrir directamente en app para móviles
    else {
        window.location.href = urlWhatsApp;
    }

    // Resetear formulario y carrito
    formularioCliente.reset();
    carrito = [];
    actualizarContadorCarrito();
    cerrarModales();

    // Mostrar mensaje de confirmación
    alert('Pedido enviado correctamente. Será contactado pronto para confirmar.');
}
