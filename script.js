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


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}