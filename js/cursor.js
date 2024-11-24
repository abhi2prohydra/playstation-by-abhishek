const cursor1 = document.querySelector('.cursor1')
const popup = document.querySelector('.popup-menu')
const menu = document.querySelector('.menu')
const newRelease = document.querySelector('.nr');
const commingSoon = document.querySelector('.cs')
const m1 = document.querySelector('.movies1')
const m2 = document.querySelector('.movies2')

console.log(m1, m2);



console.log(newRelease, commingSoon);

document.addEventListener('mousemove',(event)=>{
    let x = event.pageX;
    let y = event.pageY;
    cursor1.style.transform = `translate(-50%,-50%)`
    cursor1.style.top = `${y}px`;
    cursor1.style.left = `${x}px`;
})
let isClicked = true;
menu.addEventListener('click',(e)=>{
    if(isClicked==true){
        menu.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`
        popup.style.transform = `translateX(0px)`
        popup.style.opacity = `1`
        isClicked = false;
        popup.style.transition = `0.3s`
    }
    else{
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`
        popup.style.transform = `translateX(-150%)`
        popup.style.opacity = `0`
        isClicked = true;
        popup.style.transition = `0.3s`
        
    }
})
m2.style.display= 'none'

newRelease.addEventListener('click',()=>{
    newRelease.style.color = `black`
    newRelease.style.backgroundColor = `white`
    commingSoon.style.backgroundColor = `black`
    commingSoon.style.color = `white`
    m1.style.display = 'flex'
    m2.style.display = 'none'
 
})

commingSoon.addEventListener('click',()=>{
    newRelease.style.color = `white`
    newRelease.style.backgroundColor = `black`
    commingSoon.style.backgroundColor = `white`
    commingSoon.style.color = `black`
    m1.style.display = 'none';
    m2.style.display = 'flex';
  
    
})

const slider = document.querySelector('.slides')
const slides = document.querySelectorAll('.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let currentIndex = 0;
next.addEventListener('click',()=>{
    if(currentIndex<slides.length -1){
        currentIndex++;
        updateSlider();
    }
    else{
        currentIndex = 0;
        updateSlider();
    }
})
prev.addEventListener('click', ()=>{
    if(currentIndex>0){
        currentIndex --;
        updateSlider();
    }
    else{
        currentIndex =slides.length-1;
        updateSlider();
    }
})


function updateSlider(){
    const slideWidth = slides[currentIndex].clientWidth;
    slider.style.transform = `translate(-${slideWidth*currentIndex}px)`;
}

