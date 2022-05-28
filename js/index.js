// Validación formulario Contacto 
function validateForm(){
    let x=document.forms["contactoFinal"]["mensaje"].value;
    if(x==""){
        alert("Debe completar los datos del viaje");
        return false;
    }
}