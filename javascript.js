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
  
  function mostrarListado(array){
    console.log("Nuestros cursos son: ")
    for(let curso of array){
        console.log("El curso de" ,curso.nombre, "tiene una duracion de", curso.duracion,", sus temas principales son", curso.temas, "y su precio es de $" ,curso.precio)
    }
  }
  class Carrera{
    constructor(nombre, temas, duracion, precio){
       this.nombre = nombre,
       this.temas = temas,
       this.duracion = duracion,
       this.precio = precio
    }
  }
  const carrera1 = new Carrera("pasteleria","Aprende todo sobre pastelería, marketing, etc.", "2 años", 200000)
  const carrera2 = new Carrera("gastronomia", "Aprende todo sobre gastronomía, nutrición, marketing, etc.", "3 años", 300000)
  const seccion1 = []
  seccion1.push(carrera1, carrera2)
  
  function mostrarListado1(array){
    console.log("Nuestras carreras son: ")
    for(let carrera of array){
        console.log("La carrera de" ,carrera.nombre, "tiene una duracion de", carrera.duracion,", sus temas principales son", carrera.temas, "y su precio es de $" ,carrera.precio)
    }
  }
  function saludarAlumno(nombre){
    prompt(`¡Hola ${nombre}! Ingrese el nombre de la carrera o curso de su interés`)
  }
  function pedirNumero(nombre){
   prompt(`${nombre} Ingrese su numero de whatsapp y uno de nuestros asesores se pondra en contacto con usted`)
  }
  function buscarNombre(array){
    let nombreBuscado = prompt("Ingrese el nombre del curso que desea buscar")
    let busqueda = array.filter(
        (curso) => curso.nombre.toLowerCase() == nombreBuscado.toLowerCase()
    )
    if(busqueda.length == 0){
        console.log (`No hay coincidencias con ${nombreBuscado}`)
    }
    else{
        mostrarListado(busqueda)
    }
  }
  function buscarNombre1(array){
    let nombreBuscado = prompt("Ingrese el nombre del curso que desea buscar")
    let busqueda = array.filter(
        (curso) => curso.nombre.toLowerCase() == nombreBuscado.toLowerCase()
    )
    if(busqueda.length == 0){
        console.log (`No hay coincidencias con ${nombreBuscado}`)
    }
    else{
        mostrarListado1(busqueda)
    }
  }
  function menu(){
    let salirMenu1 = false
    do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
       1 - Conocé nuestros cursos
       2 - Conocé nuestras carreras
       3 - Conocé nuestros precios
       4 - ¡Quiero inscribirme!
       5 - Buscar carreras
       6 - Buscar carreras
       0 - Salir del menu`))
       switch(opcionIngresada){
          case 1:
             mostrarListado(seccion)
          break
          case 2:
             mostrarListado1(seccion1)
          break
          case 3:
             let ponerPrecio = parseInt (prompt `Ingrese el precio de su carrera/curso de interes para calcular precio final`)
             let salirMenu = false
             
             do{
               let opcionIngresada = parseInt(prompt(`Pago en 1 pago no tiene interes, en 3 cuotas tiene un 15% de recargo y en 6 cuotas un 20%
                  1 - Abonar en 1 pago
                  2 - Abonar en 3 cuotas
                  3 - Abonar en 6 cuotas
                  0 - Salir del menu`))
                  switch(opcionIngresada){
                     case 1:
                       alert (`El precio final de su carrera/curso es de $ ${ponerPrecio}`) 
                       salirMenu = true       
                     break
                     case 2:
                       const recargo3cuo = 1.15
                       let precioFinal = Math.round( ponerPrecio * recargo3cuo)
                       alert (`El precio final de su carrera/curso es de $ ${precioFinal}`)    
                       salirMenu = true
                     break
                     case 3:
                       const recargo6cuo = 1.20
                       let precioFinal1 = Math.round (ponerPrecio * recargo6cuo)
                       alert (`El precio final de su carrera/curso es de $ ${precioFinal1}`)  
                       salirMenu = true        
                     break         
                     case 0:
                        salirMenu = true
                     break   
                     default:
                        console.log("Opción no válida, ingrese alguna presente en el menu")
                     break
             }
             }while(!salirMenu)
          break
          case 4:
            let nombre = prompt ("Ingrese su nombre y apellido")
            saludarAlumno(nombre)
            pedirNumero(nombre)
            alert (`Gracias por contactarnos ${nombre}. A la brevedad nos estaremos poniendo en contacto con usted. ¡Saludos!`)
            salirMenu1 = true
           break           
          case 5:
            buscarNombre(seccion)
          break
          case 6:
            buscarNombre1(seccion1)
          break
          case 0:
             console.log(`Gracias por utilizar nuestra app. Saludos!`)
             salirMenu1 = true
          break   
          default:
             console.log("Opción no válida, ingrese alguna presente en el menu")
          break
       }
    }while(!salirMenu1)
  }
  menu()
function inscripcionEnviada (){
  alert ("Gracias por inscribirte. Pronto un representante se pondra en contacto con usted!")
}
let eventoInscripcion = document.getElementsByClassName ("staticEmail2")
eventoInscripcion.addEventListener ("click", inscripcionEnviada)
  