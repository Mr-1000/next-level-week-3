//create map
const map = L.map('mapid').setView([-22.7740765,-43.3719377], 15)

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


//create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68]
})



//criar e adicionar maker

let marker;

map.on('click', (event) =>{
  const lat = event.latlng.lat
  const lng = event.latlng.lng

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng

  //remove icon
  marker && map.removeLayer(marker)
  // adicionar icon layer
  marker = L.marker([lat, lng], { icon })
  .addTo(map)
})

// select fotos

function addFotos(){
    // pegar o container de fotos
    const container = document.querySelector('#images')
    //pegar o container pra duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar um clone da ultima imagem
    const newContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //varificar se o campo ta vazio nao adicionar ao container
  const input = newContainer.children[0];

   if (input.value == "") {
       return;
   }

    //limpar o campo
    input.value = ""

    // adicionar clone container imagem
    container.appendChild(newContainer)

}

function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return;
    }
    //deletar campo
    span.parentNode.remove()

}

//troca sim ou nao

function toggleSelect(event){
    //removendo classe
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })
    //adiciando classe
    const button = event.currentTarget;
     button.classList.add('active')

     //atualiuzar input
     const input = document.querySelector('[name=open_on_weekends]')
     console.log(input)

     //verificar se sim ou não
     input.value = button.dataset.value
}
