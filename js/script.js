const prevButton = document.getElementById('prev-Btn')
const nextButton = document.getElementById('next-Btn')

const imgContainer = document.getElementById('img-container')
const currentImgContainer = document.getElementById('current-Img')

const imgList = [
    {
        id: 0,
        title: 'image 1',
        src: './images/img1.jpg'
    },
    {
        id: 1,
        title: 'image 2',
        src: './images/img2.jpg'
    },
    {
        id: 2,
        title: 'image 3',
        src: './images/img3.jpg'
    },
    {
        id: 3,
        title: 'image 4',
        src: './images/img4.jpg'
    },
    {
        id: 4,
        title: 'image 5',
        src: './images/img5.jpg'
    },
    {
        id: 5,
        title: 'image 6',
        src: './images/img6.jpg'
    },
    {
        id: 6,
        title: 'image 7',
        src: './images/img7.jpg'
    },
    {
        id: 7,
        title: 'image 8',
        src: './images/img8.jpg'
    },
    {
        id: 8,
        title: 'image 9',
        src: './images/img9.jpg'
    },
    {
        id: 9,
        title: 'image 10',
        src: './images/img10.jpg'
    },
    {
        id: 10,
        title: 'image 11',
        src: './images/img11.jpg'
    },
    {
        id: 11,
        title: 'image 12',
        src: './images/img12.jpg'
    },
]

let currentImg = 0

const updateCurrentImg = (value) => {
    currentImgContainer.src = imgList[Math.abs(value%12)].src
}

document.addEventListener('DOMContentLoaded', updateCurrentImg(currentImg))

imgList.forEach((img) => {
    let wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add('img-wrapper')
    let imgElement = document.createElement('img')
    imgElement.src = img.src
    imgElement.setAttribute('index', img.id)
    imgElement.addEventListener('click', (event) => {
        onPicClickHandler(Number(event.target.getAttribute('index')))
    })
    wrapperDiv.appendChild(imgElement)
    imgContainer.appendChild(wrapperDiv)
})

const nextImg = () => {
    currentImg += 1
    updateCurrentImg(currentImg)
}

const prevImg = () => {
    currentImg -= 1
    updateCurrentImg(currentImg)
}

const onPicClickHandler = (id) => {
    const [img] = imgList.filter(img => img.id === id)
    currentImg = img.id
    updateCurrentImg(currentImg)
}