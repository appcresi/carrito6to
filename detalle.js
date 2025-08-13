let productoseleccionado = JSON.parse( localStorage.getItem("detalle"))

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
                                <button id="sumarproducto">+</button>
                                <p>0</p>
                                <button id="restarproducto">1</button>
                            </div>
                            <button id="agregarproducto">Agregar Carrito</button>
        `
        document.getElementById("boxproductos").appendChild(parrafo)
}

cargarproducto()