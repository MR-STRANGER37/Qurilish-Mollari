let elMainForm = document.querySelector('.main-Form')


let elSurForm = document.querySelector('.Sur-Form')
let elSurInput = document.querySelector('.Sur-input')

elMainForm.addEventListener('submit',function(SurEvt){
    SurEvt.preventDefault()
    let elSurVal = elSurInput.value
    elSurInput.value = ''
    console.log(elSurVal);
})



let elNameForm = document.querySelector('.Name-form')
let elNameInput = document.querySelector('.Name-input')

elMainForm.addEventListener('submit',function(NameEvt){
    NameEvt.preventDefault()
    let elNameVal = elNameInput.value
    elNameInput.value = ''
    console.log(elNameVal);
})




let elNumberForm = document.querySelector('.Num-form')
let elNumberInput = document.querySelector('.Num-input')

elMainForm.addEventListener('submit',function(NumberEvt){
    NumberEvt.preventDefault()
    let ElNumberVal = elNumberInput.value
    elNumberInput.value = ''
    console.log(ElNumberVal)
})