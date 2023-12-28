let bg = document.getElementById("bg");
let moon1 = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let img = document.getElementById("img");
const feedback = document.querySelector('.feedback')
const container = document.querySelector('.container4')
const question = document.querySelector('.question')
const feedback_2 = document.querySelector('.feedback2')
const toggleBtn = document.querySelector('.toggle_btn')
const drop_down = document.querySelector('.dropdown')
const dropDown = document.querySelector('.dropdown')

window.addEventListener('scroll',function(){
    var value = this.window.scrollY;
    bg.style.bottom = value * 0.5 + 'px';
    moon1.style.left = -value * 0.6 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * .01 + 'px';
    text1.style.right= value * 1+ 'px';
    text2.style.right = value * 1 + 'px';
    text3.style.right = value * 1 + 'px';
    img.style.right = value * 1 + 'px'
})

feedback.onclick = function(){
    container.classList.add('active')
}
feedback_2.onclick = function(){
    container.classList.add('active')
}

toggleBtn.addEventListener('click', () =>{
    drop_down.classList.toggle('remove')
    dropDown.classList.add('active')
})

login.onclick = function(){
    wrapper.classList.toggle('active-popup')
    drop_down.classList.add('remove')
}