var app = new Vue({
    el: '#div-usuarios',
    data: {
      titulo_seccion: 'Gestión de usuarios',
      titulo_boton: 'Crear usuario',
      usuarios: 
        [{
            id: "1",
            nombre: "Edgar Orozco",
            correo: "edgar.orozco@simplycoffee.com"
        },
        {
            id: "2",
            nombre: "José Luis Rassa",
            correo: "joseluis.rassa@simplycoffee.com"
        },
        {
            id: "3",
            nombre: "Mauricio Ruiz",
            correo: "mauricio.ruiz@simplycoffee.com"
        },
        {
            id: "4",
            nombre: "Mónica Angulo",
            correo: "monica.angulo@simplycoffe.com"
        }]
    }
})

/* Función: verUsuario
Autor: Mónica Angulo
Fecha: 23/09/2021
Descripción: función para el llamado de usaurio desde la sección de usuarios
 */

let crearUsuario = () => {
    //Traer todos los botones de la seccion
    const userBtns = document.querySelectorAll(".btn-primary");
    
    //Obtener el botón que dió clic
    const clicBtnuser = function (evento) {
        console.log = "El botón fue..."
    }
    // botones es un arreglo así que lo recorremos
    userBtns.forEach(userBtn => {
        //Agregar listener
        userBtn.addEventListener("click", clicBtnuser);
        //Ir a la página de usuario
        window.location = "./usuario.html"
    });
}