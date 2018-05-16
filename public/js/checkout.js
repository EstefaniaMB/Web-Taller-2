fetch('http://localhost:1889/productosPorIds?ids=' + arreglo)
    .then(function (res) {
        return res.json();
    })
    .then(function (res) {

        var lista = document.querySelector('.lista');
        var subtotal= document.querySelector('.subtotal');
        var total = document.querySelector('.total');
        var temp_subtotal = 0;
        var temp_total = 0;

        res.forEach(function (elem) {
            lista.innerHTML += '<li   <div class="cartItem"> <div class="img_item"> <img src="'+ elem.imagen +'" alt=""> </div>'+ '<div class="txt_item"> <h4>' + elem.nombre + '</h4> <p>' + elem.precio +'</p></div><div class="priceItem"><p><strong>$'+ elem.precio;
            temp_subtotal += elem.precio;
            temp_total = temp_subtotal+5;
            subtotal.innerHTML =  '$'+ temp_subtotal+'.00';
            total.innerHTML = '$'+ temp_total+ '.00';

        });
    });