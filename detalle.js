let productoseleccionado = JSON.parse( localStorage.getItem("detalle"))
let contador = 0;

function cargarproducto() {
        let parrafo = document.createElement("div")
        parrafo.id = "boxproducto"
        parrafo.innerHTML = `
                            <h2 id="nombreproducto">${productoseleccionado.nombre}</h2>
                            <h3 id="precioproducto">${productoseleccionado.precio}</h3>
                            <img src="${productoseleccionado.imagen}" alt="" id="imagenproducto">
                            <p id="descripcionproducto">${productoseleccionado.descripcion}</p>
                            <p id="stockproducto">Stock: ${productoseleccionado.stock}</p>
                            <div id="boxcontador">
                                <button id="sumarproducto" onclick="sumarproducto()">+</button>
                                <p id="pcontador">0</p>
                                <button id="restarproducto" onclick="restarproducto()">-</button>
                            </div>
                            <button id="agregarproducto" onclick="agregarcarrito()">Agregar Carrito</button>
        `
        document.getElementById("boxproductos").appendChild(parrafo)
}

cargarproducto()

function sumarproducto() {
    if (contador < productoseleccionado.stock){
        contador = contador + 1
        document.getElementById("pcontador").innerHTML = contador
    }else{
        alert("Stock máximo alcanzado.")
    }
    
}

function restarproducto() {
    if (contador > 0){
        contador = contador - 1
        document.getElementById("pcontador").innerHTML = contador
    }
}

function agregarcarrito() {
    if (contador > 0) {
        let productojson = JSON.stringify(productoseleccionado)
        localStorage.setItem("carrito", productojson)
        window.location.href = "carrito.html"
    }else{
        alert("Indicar la cantidad de productos a comprar.")
    }
    
}