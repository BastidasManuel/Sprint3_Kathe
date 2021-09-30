import * as validaciones from './form.js';
import * as InsertForm from './registro.js';

const form = document.querySelector("form");
const inputsNombre = document.getElementById("nombre");
const inputsApellido = document.getElementById("apellido");
const inputsTelefono = document.getElementById("telefono");
const inputsCorreo = document.getElementById("correo");
const inputsContrasena = document.getElementById("contrasena");
var  validation = document.createElement('div');
var mensaje;

function agregarMensajeError(mensaje,inputsValidation){
        document.getElementById("validation"+inputsValidation).innerHTML =mensaje;
        
}
function limpiarInputs(){
    inputsNombre.value="";
    inputsApellido.value='';
    inputsTelefono.value="";
    inputsCorreo.value=""
    inputsContrasena.value="";
} 
form.onsubmit = function(e) {

    e.preventDefault();
    if (!(validaciones.checkNombre(inputsNombre.value))){
        mensaje ="Verificar Nombre *";
        agregarMensajeError(mensaje,'Name')
    }else{    
        mensaje="";  
        agregarMensajeError(mensaje,'Name');
    }
    if (!(validaciones.checkApellido(inputsApellido.value))){
        mensaje ="Verificar Apellido *";
       agregarMensajeError(mensaje,'Apellido')
    }else{
        mensaje="";
        agregarMensajeError(mensaje,'Apellido')
    }
    if (!(validaciones.checkTelefono(inputsTelefono.value))){
        mensaje ="Verificar Telefono *";
       agregarMensajeError(mensaje,'Phone');
    }else{
        mensaje="";
        agregarMensajeError(mensaje,'Phone')    
    }
    if (!(validaciones.checkCorreo(inputsCorreo.value))){
        mensaje ="Verificar Correo *";
       agregarMensajeError(mensaje,'Email')
    }else{
        mensaje="";
        agregarMensajeError(mensaje,'Email')
    }
    if (!(validaciones.checkContrasena(inputsContrasena.value))){
        mensaje ="Verificar Contraseña *";
        agregarMensajeError(mensaje,'Pass')
    }else{
        mensaje="";
        agregarMensajeError(mensaje,'Pass')
    }

    
    if(!(validaciones.checkContrasena(inputsContrasena.value)) || !(validaciones.checkCorreo(inputsCorreo.value)) || !(validaciones.checkTelefono(inputsTelefono.value)) || !(validaciones.checkApellido(inputsApellido.value)) || !(validaciones.checkNombre(inputsNombre.value))){
        validation.innerHTML='<div class="validation" style="color:red;margin-bottom: 20px;">Por favor verifique que los campos esten correctos</div>';
        document.body.appendChild(validation);
    }else{
        InsertForm.agregarRegistro();
        InsertForm.ordenarArreglo(baseDatosUsers);
        
        limpiarInputs();
    }
    

}

    