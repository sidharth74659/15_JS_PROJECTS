const hexColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const reset = document.getElementById('reset')
const choose = document.getElementById('choose')

btn.addEventListener('click', () => {
    let hex = "#"
    for (let i = 0; i < 6; i++) {

        hex += hexColor[getRandom()]
    
    }

    document.body.style.backgroundColor = hex
    color.textContent = hex
}) 

 function getRandom() {
     return Math.floor(Math.random() * hexColor.length)
 }

reset.addEventListener('click', function() {
    color.textContent = "rgba(167,44,127)"
    document.body.style.backgroundColor = "rgba(167,44,127)"

})

choose.addEventListener('click', function() {
    
    var x = window.prompt("Enter Value", "Enter a color name or enter a hex code(Ex : #e35df5)")

        color.textContent = x
        document.body.style.backgroundColor = x

    // typeOf (x)
    // if(x.includes("#") == false) {
    //     color.textContent = x
    //     document.body.style.backgroundColor = x
    // } else {
    //     color.textContent = x
    //     document.body.style.backgroundColor = x
    // }


/* <input type="text" id="bleh" /> 
<script> 
  var inputElement = document.getElementById('bleh'); 
  var theirInput = ''; 
  inputElement.addEventListener('change', function(e) { 
    theirInput = e.target.value;  
  });  
</script>  */
})
