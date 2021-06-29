let alertSuccess = $("alert-signup-success");
let btn = $("button-all-user");

$("#btn-submit").on("click",checkPass())

$("#button-all-user").on("click", function(){
    // $(".alert-signup-success").removeClass("hidden");
    $(".alert-signup-success").css("right","0");

})



function checkPass(){
    let pass1 = $("#contraseña").val()
    let pass2 = $("#pass2").val()

    console.log(pass1)
    console.log(pass2)
    
    if(pass1 == pass2){
        alert("son iguales")
    }
}

// console.log(alertSuccess)
// console.log(btn)
