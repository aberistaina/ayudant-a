const form = document.getElementById("crearAnimal");
const nombre = document.getElementById("nombre");
const tipo = document.getElementById("tipoAnimal");
const tablaAnimales = document.getElementById("table")
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')





//Get Animales

addEventListener("DOMContentLoaded", obtnerAnimales())

async function obtnerAnimales(){

    const requestOptions = {
    method: "GET",
    };

    const response = await fetch("http://localhost:3000/api/v1/animales/", requestOptions)
    const data = await response.json()
    const animales = data.data
    const tablaCompleta = crearTabla(animales)
    tablaAnimales.innerHTML = tablaCompleta

}

function crearTabla(animales){

    const tbody = animales.map(animal =>
        `
        <tr>
            <td>${animal.id}</td>
            <td>${animal.nombre}</td>
            <td>${animal.tipo}</td>
            <td><button type="button" class="btn btn-success modificar" data-id=${animal.id}>Modificar</button></td>
            <td><button type="button" class="btn btn-danger eliminar"data-id=${animal.id}>Eliminar</button></td> 
        </tr>
        `
    ).join("")

    const tablaCompleta = `

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Modificar</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                ${tbody}
            </tbody>
        </table>
    `

    return tablaCompleta

}


//Post Animales
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        nombre: nombre.value,
        tipo: tipo.value,
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    const response = await fetch("http://localhost:3000/api/v1/animales/", requestOptions)
    const data = await response.json()
    obtnerAnimales()
    nombre.value = ""
    tipo.value = ""
    

});



//Eliminar Animales

tablaAnimales.addEventListener("click", (event) =>{
    const elemento = event.target
    const id = elemento.dataset.id
    const confirmación = confirm("Desea eliminar el animal?")

    if(elemento.classList.contains("eliminar")){
        if(confirmación){
            eliminarAnimal(id)
        }

    
    }else{
        return
    }
})

async function eliminarAnimal(id){

    const requestOptions = {
    method: "DELETE",
    };

    const response = await fetch(`http://localhost:3000/api/v1/animales/${id}`, requestOptions)
    const data = await response.json()
    if(data.code == 200){
        appendAlert(data.message, "success")
        obtnerAnimales()
    }else{
        appendAlert(data.message, "danger")
    }

}


function appendAlert(message, type){
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }
  