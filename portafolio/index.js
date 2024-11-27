const cursosContenedor = document.getElementById("contenedor-cursos")
const proyectosContenedor = document.getElementById("contenedor-proyectos")

const cursosBTN = document.getElementById("cursos")
const proyectosBTN = document.getElementById("proyectos")

cursosBTN.addEventListener("click",e=>{
    console.log(cursosBTN)
    cursosContenedor.classList.toggle("expanded")
})
proyectosBTN.addEventListener("click",e=>{
    proyectosContenedor.classList.toggle("expanded")
})