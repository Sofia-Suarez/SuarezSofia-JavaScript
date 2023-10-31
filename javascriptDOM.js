let formInscripcion = document.getElementById ("formInscripcion")
let botonBuscar = document.getElementById("buscador")
let botonEnviar = document.getElementById ("botonEnviar")
formInscripcion.addEventListener ("submit" , (e) => {
    e.preventDefault()
    guardarUsuarioEnLS()
    inscripcionEnviada()
})

  let botonModo = document.getElementById("botonModo")
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
let tarjCursos = document.createElement('article');
tarjCursos.setAttribute('class', 'col-sm-6 mb-3 mb-sm-0');
tarjCursos.innerHTML = `
<div id="cajaCurso" class="card-title">
<h1 class="tituloCurso">${curso.nombre}</h1>
<h2 class="textoCurso">Temas: ${curso.temas}</h2>
<h2 class="textoCurso">Duración: ${curso.duracion}</h2>
<h2 class="textoCurso">Precio: $${curso.precio}</h2>
<button id="inscribirmeCurso-${curso.nombre}"> <a href="#inscripcion">Inscribirme</a></button>
</div>`;
document.getElementById('cursos').appendChild(tarjCursos);

}
})
.catch(error => console.error('Error cargando cursos:', error));
}
function inscripcionEnviada (){
  Swal.fire({
    title: `¡Genial, ya te inscrbiste`,
    text: `Pronto, uno de nuestros representantes se pondra en contacto con usted`,
    showConfirmButton: false,
    timer: 3000
  })
}
function guardarUsuarioEnLS(){
  const nombre= document.getElementById ("nombre").value;
  const apellido= document.getElementById ("apellido").value;
  const numero= document.getElementById ("numero").value;
  const mail= document.getElementById ("mail").value;
  const femenino= document.getElementById ("femenino").value;
  const masculino= document.getElementById ("masculino").value;
  const otro= document.getElementById ("otro").value;
  const formacion= document.getElementById ("formacion").value;
  const area= document.getElementById ("area").value;
  const usuario={
    nombre:nombre,
    apellido:apellido,
    numero:numero,
    mail:mail,
    femenino:femenino,
    masculino:masculino,
    otro:otro,
    formacion:formacion,
    area:area,
  };
localStorage.setItem(`usuario`,JSON.stringify(usuario));
  }

cargaCursos()




