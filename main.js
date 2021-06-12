let name = $("name");
let lastName = $("lastName");
let email = $("email");
let pass = $("pass");



$(function(){
    listar();
    // guardar();
});

function listar(){
    _ajax("showdata.php", "")
    .done(function(info){
        // console.log(info);

        var usuarios = JSON.parse(info);
        // console.log(usuarios);
        let html = "";

        for(var i in usuarios.data){
            html+=` <h1> <b>Nombres:</h1> <p>${usuarios.data[i].nombre}</b>
                    <h1> <b>Apellido: </h1> <p>${usuarios.data[i].apellido}</p></b>
                    <h1> <b>Correo Electronico: </h1> <p>${usuarios.data[i].correo_electronico}</p></b>
                    <h1> <b>Contraseña:</h1> <p>${usuarios.data[i].contraseña}</p></b>
                    <div style="border-bottom: 7px solid green"></div>
            `;
        }
        
        $("#data_usuarios").html(html);
    });
}

function datos(){
    let data = [];
    data.push(
        {"nombre":"nombretest", "apellido":"apellidotest", "correo_electronico":"correotest", "contraseña":"contraseñartest"},
        // {"nombre":$(this."#frm")}
        );





    let usuarios = {"data": frm};
    return usuarios;
}




function guardar(){
    let json = JSON.stringify(datos());
    _ajax("savedata.php",{"json": json})
    .done(function(info){
        if(info){
            $("#data_enviada").html(`<h3>SE HA REGISTRADO CORRECTAMENTE LOS DATOS</h3>`)
            
            listar();
        }else{
            $("#data_enviada").html(`<h3>¡ERROR!</h3>`)

        }
    });
}

function _ajax(url, data){
   let ajax = $.ajax({
        "method": "POST",
        "url": url,
        "data": data
    })
    return ajax;
}