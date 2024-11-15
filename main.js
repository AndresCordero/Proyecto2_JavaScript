
const productos = [
        { id: 1, nombre: "Té Verde", precio: 2.00, categoria: "Bebida", disponibilidad: true },
        { id: 2, nombre: "Croissant", precio: 1.50, categoria: "Panaderia", disponibilidad: true },
        { id: 3, nombre: "Muffin de Chocolate", precio: 2.00, categoria: "Panaderia", disponibilidad: true },
        { id: 4, nombre: "Sándwich de Jamón y Queso", precio: 2.50, categoria: "Comida", disponibilidad: true },
        { id: 5, nombre: "Ensalada César", precio: 4.00, categoria: "Comida", disponibilidad: true },
        { id: 6, nombre: "Smoothie de Frutas", precio: 2.50, categoria: "Bebida", disponibilidad: true },
        { id: 7, nombre: "Espresso", precio: 2.00, categoria: "Bebida", disponibilidad: true },
        { id: 8, nombre: "Donas", precio: 2.50, categoria: "Panaderia", disponibilidad: true },
        { id: 9, nombre: "Galletas", precio: 1.50, categoria: "Panaderia", disponibilidad: true },
        { id: 10, nombre: "Quesadilla", precio: 4.50, categoria: "Comida", disponibilidad: true },
        { id: 11, nombre: "Empanadas", precio: 2.50, categoria: "Comida", disponibilidad: true },
        { id: 12, nombre: "Pasta", precio: 4.50, categoria: "Comida", disponibilidad: true },
        { id: 13, nombre: "Café Americano", precio: 2.50, categoria: "Bebida", disponibilidad: true },
        { id: 14, nombre: "Café Latte", precio: 3.00, categoria: "Bebida", disponibilidad: true },
];


let productosFiltrados = [];
let carrito = [];
let opcionInicial = pedirNumero("Ingrese:\n1 - Para ver el menu por categoria\n2 - Para realizar su pedido\n3 - para finalizar y pagar\n0 - para salir")

while (isNaN(opcionInicial) || opcionInicial > 3 || opcionInicial < 0) {
        alert("Opcion no valida! Ingrese una de la opciones disponibles")
        opcionInicial = pedirNumero("Ingrese:\n1 - Para ver el menu por categoria\n2 - Para realizar su pedido\n3 - para finalizar y pagar\n0 - para salir")
}

/*********** Menu Inicial ***********/

while (opcionInicial !== 0) {

        if (opcionInicial === 1) {

                let opcionCategoria = pedirNumero("Ingrese:\n1 - Para bebidas\n2 - Para panaderia\n3 - Para Comida\n0 - Volver al menu principal")

                while (isNaN(opcionCategoria) || opcionCategoria > 3 || opcionCategoria < 0) {
                        alert("Opcion no valida! Ingrese una de la opciones disponibles")
                        opcionCategoria = pedirNumero("Ingrese:\n1 - Para bebidas\n2 - Para panaderia\n3 - Para Comida\n0 - Volver al menu principal")
                }

                if (opcionCategoria === 1) {
                        let productosFiltrados = productosPorCategoria("Bebida")
                        alert((productosFiltrados.map(producto => "$" + producto.precio + (" - ") + producto.nombre).join("\n")))


                } else if (opcionCategoria === 2) {
                        let productosFiltrados = productosPorCategoria("Panaderia")
                        alert((productosFiltrados.map(producto => "$" + producto.precio + (" - ") + producto.nombre).join("\n")))

                } else if (opcionCategoria === 3) {
                        let productosFiltrados = productosPorCategoria("Comida")
                        alert((productosFiltrados.map(producto => "$" + producto.precio + (" - ") + producto.nombre).join("\n")))

                } else if (opcionCategoria === 0) {
                        opcionInicial = pedirNumero("Ingrese:\n1 - Para ver el menu por categoria\n2 - Para realizar su pedido\n3 - para finalizar y pagar\n0 - para salir")
                }

                /*********** Para agregar al carrito ************/

        } else if (opcionInicial === 2) {

                let idProducto
                do {
                        idProducto = pedirNumero("Seleccione un producto por ID o '0' para salir\n0 - SALIR\n" + listaDeProductos(productos))
                        carrito = actualizarCarrito(carrito, productos, idProducto)
                } while (idProducto !== 0)
                break;

                /*********** Mostrar Carrito ************/

        } else if (opcionInicial === 3) {
                alert((carrito.map(producto => "$" + producto.precio + (" - ") + producto.nombre).join("\n")))
                break;
        }

}

/****************** Funciones *********************/


/* Pedir numero al usuario */
function pedirNumero(TextPedNum) {
        return Number(prompt(TextPedNum))
}

/* Filtrar por categoria */

function productosPorCategoria(category) {

        const productosPorCategoria = productos.filter(producto => producto.categoria === (category))
        return productosPorCategoria
}

/*** Mostrar lista de productos  **/

function listaDeProductos(lista) {
        return lista.map(producto => producto.id + " - " + producto.nombre + " - $" + producto.precio).join("\n");
}


/***** Actualizar carrito ******/

function actualizarCarrito(carrito, productos, idProducto) {

        let productoBuscado = productos.find(producto => producto.id === idProducto)
        let indiceProductoBuscado = carrito.findIndex(producto => producto.id === idProducto)
        if (indiceProductoBuscado !== -1) {
                carrito[indiceProductoBuscado].unidades++
                carrito[indiceProductoBuscado].subtotal = carrito[indiceProductoBuscado].precioUnitario * carrito[indiceProductoBuscado].unidades
        } else {
        }

        carrito.push({
                nombre: productoBuscado.nombre,
                precioUnitario: productoBuscado.precio,
                unidades: 1,
                subtotal: productoBuscado.precio
        })
        console.log(carrito)
        return carrito
}


