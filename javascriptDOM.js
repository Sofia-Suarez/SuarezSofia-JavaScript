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
  const curso1 = new Curso("pasteleria","masas, merengues, tartas, tortas", "6 meses", 60000)
  const curso2 = new Curso("amateur", "sushi, empanadas, tartas, paellas", "4 meses", 45000)
  const curso3 = new Curso("bartender", "caipiriña, fernet, whisky, cervazas", "10 meses", 90000)
  const curso4 = new Curso("panes", "minion, frances, masa madre", "3 meses", 40000)
  const seccion = []
  seccion.push(curso1,curso2,curso3,curso4)
  
  // function mostrarListado(array){
  //   console.log("Nuestros cursos son: ")
  //   for(let curso of array){
  //       console.log("El curso de" ,curso.nombre, "tiene una duracion de", curso.duracion,", sus temas principales son", curso.temas, "y su precio es de $" ,curso.precio)
  //   }
  // }


const mostrarListado = (data) => {
  data.forEach(cursos => {
   const tarjCursos = document.createElement(`article`)
   tarjCursos.setAttribute (`class` , `cajaCurso`)
   tarjCursos.innerHTML = `
                          <div
                          <h1 class= "tituloCurso"> ${this.nombre} </h1>
                          <h2 class= "textoCurso" > ${this.temas} </h2>
                          <h2 class= "textoCurso" > ${this.duracion} </h2>
                          <h2 class= "textoCurso" > ${this.precio} </h2>            
                          <button id="inscrbirmeCurso"> Inscribirme</button>
                          </div>
                          `
   cursos.appendChild(tarjCursos)
  })
  const inscrbirmeCurso = document.querySelectorAll (`inscribirmeCurso`)
  inscrbirmeCurso.forEach (el => {
    el.addEventListener(`click` , (e) =>{
      agregarAlCarrito(e.Curso.id)
    })
  })
}

mostrarListado(Curso)
const carrito = []
function agregarAlCarrito (id) {
  let cursoEncontrado = Curso.find (prod =>.id === parseInt(id))
  carrito.push (cursoEncontrado)
  
}