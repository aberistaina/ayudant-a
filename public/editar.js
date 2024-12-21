const formularioEditar = document.getElementById("editarAnimal")
const nombre = document.getElementById("nombre");
const tipo = document.getElementById("tipoAnimal");

const url = new URL(window.location.href)
const pathname = url.pathname

const pathArray = pathname.split("/")
const id = pathArray[pathArray.length - 1]


addEventListener("DOMContentLoaded", obtnerAnimalPorId(id))

formularioEditar.addEventListener("submit", (event)=>{
    event.preventDefault();
    updateAnimal(id)
})

async function obtnerAnimalPorId(id){

    const requestOptions = {
    method: "GET",
    };

    const response = await fetch(`http://localhost:3000/api/v1/animales/${id}`, requestOptions)
    const data = await response.json()
    const animales = data.data
    nombre.value = animales.nombre
    tipo.value = animales.tipo
}

async function updateAnimal(id){
    

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        nombre: nombre.value,
        tipo: tipo.value,
    });
    console.log(raw);

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
    };

    const response = await fetch(`http://localhost:3000/api/v1/animales/${id}`, requestOptions)
    const data = response.json()
    
}