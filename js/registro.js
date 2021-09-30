var nuevoUsuario;
globalThis.baseDatosUsers=[];

function agregarRegistro(){
    function Usuario(nombre,apellido,correo,telefono,contrasena){
     this.nombre=nombre;
     this.apellido=apellido;
     this.telefono=telefono;
     this.correo=correo;
     this.contrasena=contrasena;
    }

    var nombreForm = document.getElementById("nombre").value;
    var apellidoForm = document.getElementById("apellido").value;
    var telefonoForm = document.getElementById("telefono").value;
    var correoForm = document.getElementById("correo").value;
    var contrasenaForm = document.getElementById("contrasena").value;
    nuevoUsuario = new Usuario(nombreForm,apellidoForm,correoForm,telefonoForm,contrasenaForm);
    console.log(nuevoUsuario);
    AgregarArreglo();
}

function AgregarArreglo(){
    baseDatosUsers.push(nuevoUsuario);
    document.getElementById("tableUsers").innerHTML += '<tbody><td>'+ nuevoUsuario.nombre +'</td><td>'+ nuevoUsuario.apellido +'</td><td>'+ nuevoUsuario.telefono +'</td><td>'+ nuevoUsuario.correo +'</td><td>'+ nuevoUsuario.contrasena +'</td></tbody>';
} 


function ordenarArreglo(arreglo){
    console.log(arreglo.sort((a, b) => {
        return a.apellido > b.apellido;
    }));
   
}

export{agregarRegistro,ordenarArreglo}