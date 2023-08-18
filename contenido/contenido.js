/*
CRUD:
  - C => CREATE
  - R => READ
  - U => UPDATE
  - D => DELETE
  Vamos a ver metodos de mongoose

  //*INSTALAR -> package.json, express, nodemon, mongoose
    - npm init -y
    - npm i express
    - npm i nodemon
    - npm i mongoose

? Asincronismo en Js
  - codigo asincrono: vamos a realizar tareas qeu tienen que esperar a que ocurra un determindo suceso
  - gestionar: callback o promesas -> then cath  / async await
  *- promesa: 
    - pendiente (pending)
    - cumplida (fullfilled)
    - rechazada (rejected)
  *- TRABAJOMONS CON ASYNC AWAIT
*/

function dividir(dividiendo, divisor){

  return new Promise((resolve, reject)=>{

    if(divisor === 0){
      reject("no se puede dividir entre cero")
    } else{
      resolve(dividiendo/divisor)
    }

  })

}



/*
? Async/await
  - forma de escribir codigo asincrono y nos sirve para ser mas legible nuestro codigo.
  - Es como escribir en modo sincrono pero estamos trabajando con asincronía
  - puntos claves:
    => para poder usar el AWAIT la funcion tiene que indicar que es ASYNC
    => try => resolve
    => catch => reject

    async function asincrona(){
  try{
    -> resolve
  }catch(error){
    -> reject
  }
}
*/
// dividir(4,0)
//   .then(resultado => {
//     console.log(resultado);
//   })
//   .catch(error=>{
//     console.log(error);
//   })


async function division(numero1, numero2){
  try{
    
    const resultado = await dividir(numero1, numero2)
    console.log(resultado); //resultado del resolve -> HACE LA DIVISION

  }catch(error){
    console.log(error); //mje reject -> reject("no se puede dividir entre cero")
  }
}

division(4,0)

function soyMessi(nombre){
  return new Promise((res, rej)=>{
    if(nombre === "messi"){
      res("Soy Messi y estoy en miami")
    } else{
      rej("No sos messi, segui soñando tranquilo")
    }
  })
}

async function esMessi(valor){
  try{

    const respuesta = await soyMessi(valor)
    console.log(respuesta); //"Soy Messi y estoy en miami"

  }catch(error){
    console.log(error); // "No sos messi, segui soñando tranquilo"
  }
}

esMessi("messi")
esMessi("ronaldo")

/* 
Metodos de mongoose
  - C -> create -> agregar nuevos datos
    => metodo .create()
    => el formato tiene que coincidir con el modelo (schema)
    => ej: producto.create({objeto_producto})

  - R -> read -> consultar los datos

  - U -> update -> modificar los datos existentes

  - D -> delete -> eliminar los datos existentes

*/