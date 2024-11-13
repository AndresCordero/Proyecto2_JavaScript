

/* const productos = [
        {id: 1, nombre: "Té Verde", precio: 2.00, categoria: "Bebida", disponibilidad: true},
        {id: 2, nombre: "Croissant", precio: 1.50, categoria: "Panaderia", disponibilidad: true},
        {id: 3, nombre: "Muffin de Chocolate", precio: 2.00, categoria: "Panaderia", disponibilidad: true},
        {id: 4, nombre: "Sándwich de Jamón y Quesoo", precio: 2.50, categoria: "Comida", disponibilidad: true},
        {id: 5, nombre: "Ensalada César", precio: 4.00, categoria: "Comida", disponibilidad: true},
        {id: 6, nombre: "Smoothie de Frutas", precio: 2.50, categoria: "Bebida", disponibilidad: true},
        {id: 7, nombre: "Espresso", precio: 2.00, categoria: "Bebida", disponibilidad: true},
        {id: 8, nombre: "Donas", precio: 2.50, categoria: "Panaderia", disponibilidad: true},
        {id: 9, nombre: "Galletas", precio: 1.50, categoria: "Panaderia", disponibilidad: true},
        {id: 10, nombre: "Quesadilla", precio: 4.50, categoria: "Comida", disponibilidad: true},
        {id: 11, nombre: "Empanadas", precio: 2.50, categoria: "Comida", disponibilidad: true},
        {id: 12, nombre: "Pasta", precio: 4.50, categoria: "Comida", disponibilidad: true},
        {id: 13, nombre: "Café Americano", precio: 2.50, categoria: "Bebida", disponibilidad: true},
        {id: 14, nombre: "Café Latte", precio: 3.00, categoria: "Bebida", disponibilidad: true},
];

function menuPrincipal(){
let opcionInicial = prompt("Bienvenido a nuetra cafeteria! que desea ordenar hoy? \nLe afrecemos: \n 1 - Bebidas \n 2 - Panaderia \n 3 - Comida \n \n Seleccione una de las opciones anteriores")
        return opcionInicial
}

let categoriaIngresada = menuPrincipal() 
 */


/* const producto = {
        nombre: "sombrero", precio: 5000

}

producto["nombre"]
producto["precio"]

function mostrarVariable(algo1, algo2) {
        alert(algo1[algo2])
}

mostrarVariable(producto, "nombre")
mostrarVariable(producto, "precio") */

/* ------------------------------------------Clases------------------------------------- */

/* class Producto {
        constructor(nom, stock, precio) {
                this.nombre = nom
                this.stock = stock
                this.precio = precio
                this.esVendido = false
        }
        obtenerNombre() {
                return this.nombre
        }
        precioBruto() {
                return this.precio
        }
        precioNeto() {
                return (this.precio * 0.13) + this.precio
        }
        precioDescuento() {
                let descuento = producto1.precioNeto() * 0.10
                return producto1.precioNeto() - descuento
        }
}

let producto1 = new Producto("reloj", 20, 12000)

console.log(producto1.obtenerNombre())
console.log(producto1.precioBruto())
console.log(producto1.precioNeto())
console.log(producto1.precioDescuento()) */


/* --------------------------------Array ------------------------------- */

/* 
const palabras = ["Juan" , "Carlos", "Maria"]
palabras[2] = "Guillermo" 



for (let i = 0; i < palabras.length; i++) {
        console.log(palabras[i]);        
} */


/* ---------------------------Eliminar un elemento de la lista------------------------------ */


/* function eliminarArtic(elim) {

        return articulos.splice(elim, 1)
        
}
let articulos = ["Pan", "cafe", "helado", "Sandwitch", "Expresso"]
let seleccion =  prompt("Ingrese el articulo que desea eliminar: \n\n 1. Pan, 2. cafe, 3. helado, 4. Sandwitch, 5. Expresso") - 1
console.log(articulos)
console.log(seleccion)
eliminarArtic(seleccion)
console.log(articulos) */



/* ---------------------------  IndexOf ------------------------------ */

/* let articulos = ["Pan", "cafe", "helado", "Sandwitch", "Expresso"]
/* console.log (articulos)
/* let eliminar = prompt("Ingrese nombre a eliminar")
let indice = articulos.indexOf("helado")
if (indice !== -1) {
        articulos.splice(indice, 1)
}
console.log (articulos) */


/* --------------------- hacer lista editable------------------------- */
/* 
let lista = []

do {
        opcion = Number(prompt("Ingrese la opcion\n0. Salir\n1. agregar\n2. quitar\n3. Ver lista"))
        if (opcion === 1) {
                let nombreProducto = prompt("Ingrese nombre del producto").toLowerCase()
                lista.push(nombreProducto)
        } else if (opcion === 2) {
                let nombreProducto = prompt("Ingrese nombre del producto").toLowerCase()
                let indiceProducto = lista.indexOf(nombreProducto)
                if (indiceProducto !== -1) {
                        lista.splice(indiceProducto, 1)
                }
        } else if (opcion === 3) {
                alert(lista.join("\n"))
        }      
} while (opcion !== 0)


         */





/* ----------------------------Array de Objetos --------------------------- */

let opcion = 1
const objetos = [
        { id: 1, nombre: "Té Verde", precio: 2.00, categoria: "Bebida"},
        { id: 2, nombre: "Croissant", precio: 1.50, categoria: "Panaderia"},
        { id: 3, nombre: "Muffin de Chocolate", precio: 2.00, categoria: "Panaderia"},
]


/* 
for (let i = 0; i < objetos.length; i++) {
        console.log(objetos[i].nombre)
        console.log(objetos[i].precio)
        console.log(objetos[i].categoria)
} */


for (const objeto of objetos) {
        console.log(objeto.nombre)
        console.log(objeto.precio)
        console.log(objeto.categoria)
}


