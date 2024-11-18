
function principal() {
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

        let carrito = [];
        let opcionInicial = pedirNumero("Ingrese:\n1 - Para ver el menu por categoria\n2 - Para realizar su pedido\n3 - para finalizar y pagar\n0 - para salir")

        while (isNaN(opcionInicial) || opcionInicial > 4 || opcionInicial < 0) {
                alert("Opcion no valida! Ingrese una de la opciones disponibles")
                opcionInicial = pedirNumero("Ingrese:\n1 - Para ver el menu por categoria\n2 - Para realizar su pedido\n3 - Para ver el carrito\n0 - para salir")
        }

        /*********** Menu Inicial ***********/

        while (opcionInicial !== 0) {
                if (opcionInicial === 1) {
                        let opcionCategoria = pedirNumero("Ingrese:\n1 - Para bebidas\n2 - Para panaderia\n3 - Para Comida\n0 - Volver al menu principal")
                        while (isNaN(opcionCategoria) || opcionCategoria > 3 || opcionCategoria < 0) {
                                alert("Opcion no valida! Ingrese una de la opciones disponibles")
                        }

                        do {
                                if (opcionCategoria === 1) {
                                        alert(productos.filter(producto => producto.categoria === "Bebida").map(producto => producto.nombre + " - $" + producto.precio).join("\n"))
                                } else if (opcionCategoria === 2) {
                                        alert(productos.filter(producto => producto.categoria === "Panaderia").map(producto => producto.nombre + " - $" + producto.precio).join("\n"))
                                } else if (opcionCategoria === 3) {
                                        alert(productos.filter(producto => producto.categoria === "Comida").map(producto => producto.nombre + " - $" + producto.precio).join("\n"))
                                } else {}
                                opcionCategoria = pedirNumero("Ingrese:\n1 - Para bebidas\n2 - Para panaderia\n3 - Para Comida\n0 - Volver al menu principal")
                        } while (opcionCategoria !== 0)

                        /*********** Para agregar al carrito ************/

                } else if (opcionInicial === 2) {
                        do {
                                let idProducto = pedirNumero("Seleccione un producto por ID o '0' para salir\n0 - SALIR\n" + listar(productos))
                                carrito = actualizarCarrito(carrito, productos, idProducto)
                                opcionAgregar = pedirNumero("Desea agregar otro elemento?\n1 - Si\n0 - No")
                        } while (OpcionAgregar === 1)

                        /*********** Mostrar Carrito ************/

                } else if (opcionInicial === 3) {
                        alert((carrito.map(producto => "$" + producto.precio + (" - ") + producto.nombre).join("\n")))

                }
                opcionInicial = pedirNumero("Ingrese:\n1 - Para ver el menu por categoria\n2 - Para realizar su pedido\n3 - para finalizar y pagar\n0 - para salir")
        }
}

principal()

/****************** Funciones *********************/

/* Pedir numero al usuario */

function pedirNumero(TextPedNum) {
        return Number(prompt(TextPedNum))
}

function listar(productos) {
        return productos.map(elemento => elemento.id + " - " + elemento.nombre + " - $" + elemento.precio).join("\n")
}

function filtrarProductos(productos) {
        let listaPorCategoria = (productos.filter(producto => producto.categoria === "Bebida"))
        return listaPorCategoria
}

function actualizarCarrito(carrito, productos, idProducto) {
        let productoBuscado = productos.find(producto => producto.id === idProducto)
        let indiceProducto = carrito.findIndex(producto => producto.id === idProducto)


        if (indiceProducto !== -1) {
                carrito[indiceProducto].unidades++,
                        carrito[indiceProducto].subtotal = carrito[indiceProducto].precioUnitario * carrito[indiceProducto].unidades
        } else

                carrito.push({
                        id: productoBuscado.id,
                        nombre: productoBuscado.nombre,
                        precioUnitario: productoBuscado.precio,
                        unidades: 1,
                        subtotal: productoBuscado.precio
                })
        console.log(carrito)
        return carrito
}