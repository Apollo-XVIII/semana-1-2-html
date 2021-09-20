
/* Función: Ver verReceta
Autor: Mónica Angulo
Fecha: 158/09/2021
Descripción: función para el llamado de la receta desde la sección de recetas
 */

let verReceta = () => {
    //Traer todos los botones de la seccion
    const recipeBtns = document.querySelectorAll(".btn-warning");
    
    //Obtener el botón que dió clic
    const clicBtnRecipe = function (evento) {
        console.log = "El botón fue..."
    }
    // botones es un arreglo así que lo recorremos
    recipeBtns.forEach(recipeBtn => {
        //Agregar listener
        recipeBtn.addEventListener("click", clicBtnRecipe);
        //Ir a la página de la receta
        window.location = "./receta.html"
    });
}
