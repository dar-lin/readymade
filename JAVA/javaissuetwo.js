const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")
const counter = document.querySelector("div.counter")
const rightLayer = document.querySelector("div.right-layer")
const leftLayer = document.querySelector("div.left-layer")

let currentSlide = 0
let z = 1

rightLayer.addEventListener("click", function() {
    currentSlide = currentSlide + 1
    z = z + 1

    if (currentSlide > 6) {
        currentSlide = 0
    }

    images[currentSlide].style.zIndex = z

    counter.innerHTML = `${currentSlide + 1} / ${images.length}`
})

leftLayer.addEventListener("click", function (){
    if (currentSlide < 1){
      currentSlide = 6
    }
    currentSlide = currentSlide - 1
    z = z + 1
    images[currentSlide].style.zIndex = z
    
    counter.innerHTML = `${currentSlide + 1} / ${images.length}`
  })
