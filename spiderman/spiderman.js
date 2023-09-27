let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

//clear all images
function reset(){
    for(let i=0; i< sliderImages.length; i++){
        sliderImages[i].style.display = 'none'; 

    }
}


function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

//Show Next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}


// Show previous
function slideLeft(){
    reset();
    sliderImages[current -1].style.display = 'block';
    current--;
}


arrowLeft.addEventListener('click', function(){
    if(current ===0){
        current = sliderImages.length;


    }
    slideLeft();
})

arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1
    }
    slideRight();
})







const plus = document.querySelector(".plus-text"),
  minus = document.querySelector(".minus-text"),
  num = document.querySelector(".quantity-text");

let a = 1;

plus.addEventListener("click", () => {
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
});


