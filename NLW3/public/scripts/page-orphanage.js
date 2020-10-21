
 const Lat = document.querySelector('span[data-lat]').dataset.lat
 const Lng = document.querySelector('span[data-lng]').dataset.lng


const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([Lat, Lng], 15)

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

    //create icon
    const icon = L.icon({
        iconUrl: "/images/map-marker.svg",
        iconSize:[58, 68],
        iconAnchor:[29, 68],
        popupAnchor:[170, 2]
    })

   
    //create icon
    L.marker([Lat, Lng], {icon})
    .addTo(map)


// image galery
 const selectImage = (event) =>{
     const button = event.currentTarget
     //remover todas as clases active
     const btn = document.querySelectorAll(".images button")
     
     btn.forEach(removeClass)

     function removeClass(button){
        button.classList.remove('active')
     }

     //selecionar a imagem clicada
     const image = button.children[0]
     const imageContainer = document.querySelector('.orphanage-details > img')

     //atualizar o container da imagem
     imageContainer.src = image.src

     //adicionar a classe active
     button.classList.add('active')
 }