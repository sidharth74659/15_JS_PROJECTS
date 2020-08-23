// const color = document.getElementByI-d('color')
// const btn = document.queryselector('btn')

const colors = ["red", "green", "rgba(100,134,255)", "#f158s6"]
const btn = document.getElementById("btn")
const color = document.querySelector('.color')


btn.addEventListener('click', function() {
    const randomNumber = getRandom()
    // console.log(randomNumber)
    // console.log(colors[randomNumber]);
    document.body.style.backgroundColor = colors[randomNumber];
    
    color.textContent = colors[randomNumber]
});

function getRandom() {

    // console.log(Math.floor(Math.random() * colors.length))
    return Math.floor(Math.random() * colors.length)
}