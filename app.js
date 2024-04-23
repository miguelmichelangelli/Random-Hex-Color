const boton = document.querySelector('#color-button')
const color = document.querySelector('#color')

function generateRandomColor(){
    let hexValues = '0123456789ABCDEF' 
    let hexColor = '#'

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16)
        hexColor += hexValues[index]
    }
    return hexColor
}

boton.addEventListener('click', function() {
    let newColor = generateRandomColor();
    color.innerText = newColor
    document.body.style.backgroundColor = newColor
})

