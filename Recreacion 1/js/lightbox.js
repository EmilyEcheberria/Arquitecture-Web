const imagenes = document.querySelectorAll('.img-galeria')
const imageLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.image-light')

imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
           aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click',(e)=>{
   if(e.target !== imageLight){
    contenedorLight.classList.toggle('show')
    imageLight.classList.toggle('showImage')
   }
})


const aparecerImagen=(imagen)=>{
    imageLight.src= imagen ;
    contenedorLight.classList.toggle('show')
    imageLight.classList.toggle('showImage')
}