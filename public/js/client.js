function actualizarCarrito (){
    document.querySelectorAll('.carrito').forEach(function(carro){
        carro.innerHTML = arreglo.length;
    })
}

var arreglo = JSON.parse(localStorage.getItem('arreglo')|| '[]');
if(arreglo == null) arreglo = [];

actualizarCarrito();