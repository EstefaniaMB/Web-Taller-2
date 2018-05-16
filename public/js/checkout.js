fetch('http://localhost:1889/productosPorIds?ids=' + arreglo)
    .then(function (res) {
        return res.json();
    })
    .then(function (res) {

        var lista = document.querySelector('.lista');
     

        res.forEach(function (elem) {
            lista.innerHTML += '<li   <div class="cartItem"> <div class="img_item"> <img src="'+ elem.imagen +'" alt=""> </div></div>'+ '<div class="txt_item"> <h4>' + elem.nombre + '</h4> </div>' +'</p></div><div class="priceItem"><p><strong>$'+ elem.precio;
            

        });
    });