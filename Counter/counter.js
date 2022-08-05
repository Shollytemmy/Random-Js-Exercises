const increment = document.querySelector('#increment')
const decrement = document.querySelector('#decrement')
const display = document.querySelector('#display')

increment.addEventListener('click', () =>{
    display.innerText = Number(display.innerText) + 1
    


})


decrement.addEventListener('click', () => {
    display.innerText = Number(display.innerText - 1)
})