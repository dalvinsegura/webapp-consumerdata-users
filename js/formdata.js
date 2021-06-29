$("#frm").on("submit",enviarDatos());

function enviarDatos(){
    $("#frm").on("submit", function(e){
        e.preventDefault();
        let frm = $(this).serialize();
        console.log(frm)
        $.ajax({
            "method": "POST",
            "url": "backend/form.php",
            "data": frm

        }).done(function(){
            // $("#mensajexd").html(info);
        });


    });
}