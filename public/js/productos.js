

// carrito
document.querySelectorAll('.agregar').forEach(function(button) {
    button.addEventListener('click', function(){
        var id = button.parentElement.getAttribute('data-id');

        arreglo.push(id);
        actualizarCarrito();

        localStorage.setItem('arreglo', JSON.stringify(arreglo));
    });
});