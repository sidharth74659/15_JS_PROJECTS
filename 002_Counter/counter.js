
let  count = 0;


// const value = document.getElementsByClassName("value")
const value = document.querySelector(".value")
// const value = document.getElementById("value")
const btns = document.querySelectorAll('.btn')
    // console.log(btns)

btns.forEach(function(btn) {
    // console.log(btn) 
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList
        // console.log(e.currentTarget.classList)
        console.log(styles)
        if(styles.contains("increase")) {
            count++;
        } 
        if(styles.contains("decrease")) {
            count--;
        }  
      
        // else {
        if(styles.contains("reset")) {
            count = 0;
        }

        if(count > 0) {
            value.style.color = "green";
        }   else if( count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#000";
        }

        value.textContent = count;
    })


})







