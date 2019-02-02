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
        img.style.width = "50%"
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