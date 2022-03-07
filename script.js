let elMainForm = document.querySelector('.main-Form')


let elSurForm = document.querySelector('.Sur-Form')
let elSurInput = document.querySelector('.Sur-input')

elMainForm.addEventListener('submit',function(sur){
    sur.preventDefault()
    let elSurVal = elSurInput.value 
    elSurInput.value = ''
    console.log(elSurVal);
})




let elNameForm = document.querySelector('.Name-form')
let elNameInput = document.querySelector('.Name-input')

elNameForm.addEventListener('submit',function(name){
    name.preventDefault()
    let elNameVal = elNameInput.value
    elNameInput.value = ''
    console.log(elNameVal)
})



let elNumForm = document.querySelector('.Num-form')
let elNumInput = document.querySelector('.Num-input')

elNumForm.addEventListener('submit',function(num){
    num.preventDefault()
    let elNumVal = elNumInput.value
    elNumInput.value = ''
    console.log(elNumVal)
})


