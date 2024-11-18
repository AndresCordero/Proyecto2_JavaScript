function principal() {
    let productos = [
        { id: 1, nombre: "pelota futbol", precio: 5000, stock: 3, categoria: "deportes" },
        { id: 3, nombre: "arco", precio: 3000, stock: 4, categoria: "deportes" },
        { id: 6, nombre: "remera x", precio: 2500, stock: 2, categoria: "indumentaria" },
        { id: 9, nombre: "remera y", precio: 4500, stock: 2, categoria: "indumentaria" },
        { id: 11, nombre: "pelota voley", precio: 8200, stock: 6, categoria: "deportes" },
        { id: 14, nombre: "pantalon a", precio: 9000, stock: 0, categoria: "indumentaria" },
        { id: 18, nombre: "pelota basquet", precio: 7800, stock: 20, categoria: "deportes" },
        { id: 23, nombre: "pantalon b", precio: 5600, stock: 1, categoria: "indumentaria" },
        { id: 34, nombre: "celular", precio: 8700, stock: 8, categoria: "tecnologia" },
    ]

    let mensajeCategorias = obtenerCategorias(productos).join("\n")
    let carrito = []
    let opcion = pedirNumero("Ingrese:\n1 - Agregar producto al carrito\n2 - Filtrar por categoria\n3 - Finalizar compra\n0 - Salir")
    while (opcion !== 0) {
        if (opcion === 1) {
            let idProducto = pedirNumero("Seleccione un producto por ID\n" + listar(productos))
            carrito = actualizarCarrito(carrito, productos, idProducto)
        } else if (opcion === 2) {
            let categoria = prompt("Ingrese alguna categoria para filtrar productos\n" + mensajeCategorias).toLowerCase()
            let productosFiltrados = filtrarProductos(productos, "categoria", categoria)
            let idProducto = pedirNumero("Seleccione un producto por ID\n" + listar(productosFiltrados))
            carrito = actualizarCarrito(carrito, productos, idProducto)
        } else if (opcion === 3) {
            /* let total = 0
            carrito.forEach(producto => {
                total = total + producto.subtotal
            }) */
            if (carrito.length === 0) {
                alert("Primero debe agregar productos al carrito")
            } else {
                let total = carrito.reduce((acumulador, producto) => acumulador + producto.subtotal, 0)
                alert("Total de su compra $" + total + " - Gracias por elegirnos")
                carrito = []
            }
        } else { }
        opcion = pedirNumero("Ingrese:\n1 - Agregar producto al carrito\n2 - Filtrar por categoria\n3 - Finalizar compra\n0 - Salir")
    }
}

principal()

function listar(lista) {
    return lista.map(elemento => "ID: " + elemento.id + " - " + elemento.nombre).join("\n")
}

function pedirNumero(mensaje) {
    return Number(prompt(mensaje))
}

function actualizarCarrito(carrito, productos, idProducto) {
    let productoBuscado = productos.find(producto => producto.id === idProducto)
    let indiceProductoBuscado = carrito.findIndex(producto => producto.id === idProducto)
    if (indiceProductoBuscado !== -1) {
        carrito[indiceProductoBuscado].unidades++
        carrito[indiceProductoBuscado].subtotal = carrito[indiceProductoBuscado].precioUnitario * carrito[indiceProductoBuscado].unidades
    } else {
        carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            precioUnitario: productoBuscado.precio,
            unidades: 1,
            subtotal: productoBuscado.precio
        })
    }
    console.log(carrito)
    return carrito
}

function obtenerCategorias(productos) {
    let diferentesCategorias = []
    productos.forEach(producto => {
        if (!diferentesCategorias.includes(producto.categoria)) {
            diferentesCategorias.push(producto.categoria)
        }
    });
    return diferentesCategorias
}

// filtrarProductos(productos, "categoria", categoria)
function filtrarProductos(productos, nombrePropiedad, valorPropiedad) {
    return productos.filter(producto => producto[nombrePropiedad] === valorPropiedad)
}

/* console.log(Math.PI)
let numeroDecimal = 4.78
console.log(Math.ceil(numeroDecimal))
console.log(Math.floor(numeroDecimal))
console.log(Math.round(numeroDecimal))
console.log(Math.round(9.99))
console.log(Math.round(1.499999))

console.log(8.1286886.toFixed(2))

console.log(Math.round(Math.random() * 5))
console.log(Math.round(Math.random() * 5 + 10))

console.log(new Date())
console.log(new Date(2020, 10, 25, 18, 30, 25))

let ahora = new Date(2020, 10, 25, 18, 30, 25)
console.log(ahora.getUTCFullYear())
console.log(ahora.getFullYear())
console.log(ahora.getMonth())
console.log(ahora.getDate())
console.log(ahora.getHours())
console.log(ahora.getMinutes())
console.log(ahora.getSeconds())

let mes = ahora.toLocaleString('en-us', { month: 'short' });
console.log(mes)
console.log(ahora.toLocaleDateString()) */