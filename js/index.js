// Your code goes here
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(element => {

    element.addEventListener('mouseover', (e) => {

        element.style.backgroundColor = "black";
        element.style.color = "red";
    })

    element.addEventListener('mouseout', (e) => {

        element.style.backgroundColor = "white";
        element.style.color = "black";
        
    })

})


//event listener shrinks all images on scroll up and down
const container = document.querySelector("body")
const imgContent = document.querySelectorAll("img");

container.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
        imgContent.forEach(img => {
            img.style.width = "100%"
        })   
    }
    if (e.deltaY > 0) {
    imgContent.forEach(img => {
        img.style.width = "90%"
    })
    }
})

//click to cycle through top header image
const topImage = document.querySelector('.intro img');
let count = 0;
let imgArray = [
    'http://capecodonline.com/wp-content/uploads/2018/04/BayView-Beach.gif',
    'http://capecodonline.com/wp-content/uploads/2018/04/Skaket-Beach.gif',
    'https://www.visitnorthnorfolk.com/img/cms/Sheringham-Beach-1000x300.jpg',
    'img/fun-bus.jpg'
]

topImage.addEventListener('click', (e) => {
    if(count > 3){
        count = 0;
    }
    topImage.setAttribute('src', imgArray[count])
    count++
} )

//change size of top header on click
let count2 = 0
const topHeader = document.querySelector('.logo-heading');
let headerSize = [
    ['green', '4.5rem'],
    ['orange', '5rem'],
    ['purple', '5.5rem'],
    ['maroon', '6rem']
]

topHeader.addEventListener('click', (e) => {
    if(count2 > 3){
        count2 = 0
    }
    e.stopPropagation();
    topHeader.style.color = headerSize[count2][0]
    topHeader.style.fontSize = headerSize[count2][1]
    count2++

})

topHeader.addEventListener('dblclick', (e) => {
    topHeader.style.fontFamily = 'impact'
})

//change top nav background color on click
let count3 = 0;
let bColors = [
    'pink', 'orange', 'lightgray', 'teal'
]

const topNav = document.querySelector('.main-navigation')

topNav.addEventListener('click', (e) => {
    if(count3 > 3){
        count3 = 0
    }
    e.stopPropagation();
    topNav.style.backgroundColor = bColors[count3]
    count3++
})

//select nav links so that we can stop default and propgation
const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => {
    link.addEventListener('click', (e) =>{
        e.stopPropagation()
        e.preventDefault();
        paragraphs.forEach(p =>{
            if(p.style.color === 'blue'){
                p.style.color = 'red'
            } else {
                p.style.color = 'blue'
            }
           
        })
    })
})