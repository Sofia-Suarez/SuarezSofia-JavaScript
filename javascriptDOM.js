let formInscripcion = document.getElementById ("formInscripcion")

function inscripcionEnviada (){
    alert ("¡Gracias por inscribirte! Pronto un representante se pondra en contacto con usted.")
    formInscripcion.reset ()
  }
let botonEnviar = document.getElementById ("botonEnviar")
botonEnviar.addEventListener ("click" , () => {
    inscripcionEnviada()
})
class Curso{
    constructor(nombre, temas, duracion, precio){
       this.nombre = nombre,
       this.temas = temas,
       this.duracion = duracion,
       this.precio = precio
    }
  }
  //const curso1 = new Curso("Pasteleria","masas, merengues, tartas, tortas", "6 meses", 60000)
  //const curso2 = new Curso("Amateur", "sushi, empanadas, tartas, paellas", "4 meses", 45000)
  //const curso3 = new Curso("Bartender", "caipiriña, fernet, whisky, cervazas", "10 meses", 90000)
  //const curso4 = new Curso("Panes", "minion, frances, masa madre", "3 meses", 40000)
  //const arrayCursos = []
  //arrayCursos.push(curso1,curso2,curso3,curso4)

//const mostrarListado = (data) => {
//data.forEach(curso => {
//const tarjCursos = document.createElement(`article`)
//tarjCursos.setAttribute (`class` , `col-sm-6 mb-3 mb-sm-0`)
//tarjCursos.innerHTML = `
//                          <div id="cajaCurso" class= "card-title">
//                          <h1 class= "tituloCurso">  ${curso.nombre} </h1>
//                          <h2 class= "textoCurso" > Temas: ${curso.temas} </h2>
//                          <h2 class= "textoCurso" > Duración: ${curso.duracion} </h2>
//                          <h2 class= "textoCurso" > $${curso.precio} </h2>            
//                          <button href="#inscripcion" id="inscrbirmeCurso-${curso.nombre}"> Inscribirme</button>
//                          </div>
//                          `
//   containerCursos.appendChild(tarjCursos)
//   const inscrbirmeCurso = document.getElementById (`inscrbirmeCurso-${curso.nombre}`)
//   inscrbirmeCurso.addEventListener(`click` , () =>{
//       agregarAlCarrito(curso.nombre)
//     })
//   })
//  }
//mostrarListado(arrayCursos)
//const carrito = []
function agregarAlCarrito (nombre) {
  let cursoEncontrado = arrayCursos.find (prod => prod.nombre === nombre)
  carrito.push (cursoEncontrado)
  console.log (carrito) 
  }
  let botonModo = document.getElementById("botonModo")
console.log(botonModo)
if(localStorage.getItem("modoOscuro")){

}else{
    localStorage.setItem("modoOscuro", false)
}

if(JSON.parse(localStorage.getItem("modoOscuro")) == true){
    document.body.classList.toggle("darkMode")
    botonModo.innerText = "Modo oscuro"
}
botonModo.addEventListener("click", () => {
    document.body.classList.toggle("darkMode")
    if(JSON.parse(localStorage.getItem("modoOscuro")) == false){
      botonModo.innerText = "Modo oscuro"
        localStorage.setItem("modoOscuro", true)
    }
    else if(JSON.parse(localStorage.getItem("modoOscuro")) == true){
      botonModo.innerText = "Modo claro"
        localStorage.setItem("modoOscuro", false)
    }
})
function cargaCursos() {
fetch("cursos.json")
.then(resp => resp.json())
.then(data => {
for (let curso of data) {
let listadoCurso = new Curso(curso.nombre, curso.temas, curso.duracion, curso.precio);
array.push(listadoCurso);

let tarjCursos = document.createElement('article');
tarjCursos.setAttribute('class', 'col-sm-6 mb-3 mb-sm-0');
tarjCursos.innerHTML = `
<div id="cajaCurso" class="card-title">
<h1 class="tituloCurso">${curso.nombre}</h1>
<h2 class="textoCurso">Temas: ${curso.temas}</h2>
<h2 class="textoCurso">Duración: ${curso.duracion}</h2>
<h2 class="textoCurso">Precio: $${curso.precio}</h2>
<button id="inscribirmeCurso-${curso.nombre}">Inscribirme</button>
</div>`;
document.getElementById('cursos').appendChild(tarjCursos);
}
})
.catch(error => console.error('Error cargando cursos:', error));
}

cargaCursos(array)