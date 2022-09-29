const skills = document.querySelectorAll('.skills-content__card-content--item')
const experiences = document.querySelectorAll('.experience-content__card-content--item')
const largeImage = document.querySelector('.portfolio__cards--img')
const smallImages = document.querySelectorAll('.portfolio__cards--wrapper-2')
const footerLeft = document.querySelector('.footer__left')
const footerRight = document.querySelector('.footer__right')
const screenWidth = innerWidth

if(screenWidth <= 540){   
    for (let skill of skills){
        skill.classList.add('grid-12')
    }

    for (let experience of experiences){
        experience.classList.add('grid-12')
    }
    
    for(let smallImage of smallImages){
        smallImage.classList.add('grid-6')
    }
    
    largeImage.classList.add('grid-12')
    footerLeft.classList.add('grid-12')
    footerRight.classList.add('grid-12')
}
