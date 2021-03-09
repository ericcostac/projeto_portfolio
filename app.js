//ANIMAÇÃO PAGE
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//ITENS 
const logo = document.querySelector('.logo img');
const purchase = document.querySelector('.purchase button');

//DANDO VIDA PARA ANIMAÇÃO

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//

//ANIMAÇÃO DENTRO
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    logo.style.transform = 'translateZ(200px) rotateZ(-360deg)';
    purchase.style.transform = 'translateZ(75px)';

});
//ANIMAÇÃO FORA
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    logo.style.transform = 'translateZ(0px) rotateZ(0deg)';
    purchase.style.transform = 'translateZ(0px)';
});