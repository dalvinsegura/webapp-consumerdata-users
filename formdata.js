enviarDatos();

function enviarDatos(){
    $("#frm").on("submit", function(e){
        e.preventDefault();
        let frm = $(this).serialize();
        console.log(frm)
        $.ajax({
            "method": "POST",
            "url": "form.php",
            "data": frm

        }).done(function(info){
            $("#mensajexd").html(info);
            
        });
    });
}