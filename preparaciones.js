
/* Función: Ver verPreparacion
Autor: Mónica Angulo
Fecha: 16/09/2021
Descripción: función para el llamado de la preparacion desde la sección de preparaciones
 */

let verPreparacion = () => {
    //Traer todos los botones de la seccion
    const mixBtns = document.querySelectorAll(".btn-warning");
    
    //Obtener el botón que dió clic
    const clicBtnRecipe = function (evento) {
        console.log = "El botón fue..."
    }
    // botones es un arreglo así que lo recorremos
    mixBtns.forEach(mixBtns => {
        //Agregar listener
        mixBtns.addEventListener("click", clicBtnRecipe);
        //Ir a la página de la preparacion
        window.location = "./preparacion.html"
    });
}
