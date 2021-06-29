let name = $("#name");
let lastName = $("#lastName");
let email = $("#email");
let pass = $("#pass");



$(function(){
    guardar();
    listar();
});

function listar(){
    _ajax("backend/showdata.php", "")
    .done(function(info){
        // console.log(info);

        var usuarios = JSON.parse(info);
        console.log(usuarios);
        let html = "";

        for(var i in usuarios.data){
            html+=` 

            <div class="data_usuarios" id="data_usuarios">

            <div class="user_icon">
                
            <i class="fas fa-user"></i>
        
            </div>

            <div id="data_user_content" class="data_user_content">

            <div class="data_user">
                <p class="title">Nombre</p>
                <p id="name" class="data-user-paragraph">${usuarios.data[i].nombre}</p>
            </div>
            <div class="data_user">
                <p class="title">Apellido</p>
                <p id="lastName" class="data-user-paragraph">${usuarios.data[i].apellido}</p>
            </div>
            <div class="data_user">
                <p class="title">Email</p>
                <p id="email" class="data-user-paragraph">${usuarios.data[i].correo_electronico}</p>
            </div>
            <div class="data_user">
                <p class="title">Contraseña</p>
                <p id="pass" class="data-user-paragraph">${usuarios.data[i].contraseña}</p>
            </div>

            </div>

            </div>

            `;
        }

        $("#all-user").html(html);
        
        

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
    _ajax("../backend/form.php",{"json": json})
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

