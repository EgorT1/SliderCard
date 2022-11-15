const slideContainer = document.querySelector(".slide_content")
const body = document.querySelector("body")
const conatiner = document.querySelector(".container")
const buttonsContainer = document.querySelector(".buttons-container")

const bntSrc = [
    'img/HTML_icon.png',
    'img/CSS_icon.png',
    'img/JS_icon.png'
]

bntSrc.forEach(element => {
    const img = document.createElement("img");
    img.className = "btn";
    img.src = element;
    buttonsContainer.append(img)
})

const footerDecoration = document.createElement('div')
footerDecoration.className = "footer_cont_decoration";
conatiner.append(footerDecoration)

const conatinerSrc = [
    'img/iconHTML.png',
    'img/iconCSS.png',
    'img/iconJS.png'
]

conatinerSrc.forEach(element => {
    const divContainer = document.createElement('div');
    const img = document.createElement('img');
    img.className = "img";
    img.src = element;
    const longLine = document.createElement('div');
    longLine.className = 'text_decoration long-line';
    const shortLine = document.createElement('div');
    shortLine.className = 'text_decoration short-line';
    const longLine1 = document.createElement('div');
    longLine1.className = 'text_decoration long-line1';
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer_cont_bar';
    divContainer.append(img, longLine, shortLine, longLine1, footerContainer)
    slideContainer.append(divContainer)
})

const buttons = document.querySelectorAll('.btn');
const cardStyle = [
    {position: '600px', color: '#EFaDC3FF'},
    {position: '0', color: '#9392E2FF'},
    {position: '-800px', color: '#EDE34DFF'}
];

const initialPosition = () => {
    buttons[2].classList.add('active');
    body.style.backgroundColor = cardStyle[2].color;
    slideContainer.style.marginLeft = cardStyle[2].position;
}

const slideshow = () => {
    initialPosition()
    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            buttons.forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            body.style.backgroundColor = cardStyle[idx].color;
            slideContainer.style.marginLeft = cardStyle[idx].position;
        });
    });
}

slideshow()