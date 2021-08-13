let inputField = document.querySelector('.form-field')
let inputBorder = document.querySelector('.input-field')
let errorMsg = document.querySelector('.error-msg1')
let _errorMsg = document.querySelector('.error-msg2')
let select = document.querySelector('.select-tip')
let buttons = document.querySelectorAll('.green-bg')
let _inputField = document.querySelector('.form-field2')
let _inputBorder = document.querySelector('.input-field2')
// let button = document.querySelector ('button')

console.log(buttons[0]);
inputField.addEventListener('keyup', e=> {
    e.preventDefault()
    if (inputField.value.length > 0) {
        if (errorMsg.classList.contains('block')) {
            errorMsg.classList.remove('block')          
        }
        if (inputBorder.classList.contains('error-border')) {
            inputBorder.classList.remove('error-border')
            inputBorder.classList.add('success-border')
        } else {
            inputBorder.classList.add('success-border')
        }
    }
    else { 
        errorMsg.classList.add('block')
        if (inputBorder.classList.contains('success-border')) {
            inputBorder.classList.remove('success-border')
            inputBorder.classList.add('error-border')
        } else {
            inputBorder.classList.add('error-border')
        } 
    }
})

_inputField.addEventListener('keyup', e=> {
    e.preventDefault()
    if (_inputField.value.length > 0) {
        if (_errorMsg.classList.contains('block')) {
            _errorMsg.classList.remove('block')          
        }
        if (_inputBorder.classList.contains('error-border')) {
            _inputBorder.classList.remove('error-border')
            _inputBorder.classList.add('success-border')
        } else {
            _inputBorder.classList.add('success-border')
        }
    }
    else { 
        _errorMsg.classList.add('block')
        if (_inputBorder.classList.contains('success-border')) {
            _inputBorder.classList.remove('success-border')
            _inputBorder.classList.add('error-border')
        } else {
            _inputBorder.classList.add('error-border')
        } 
    }
})

// select.addEventListener('click', e=> {
//     let value;
//         if (e.target.classList.contains('custom-btn')) {
//             value = e.target.value;
//         } else if (e.target.classList.contains('btn')) {
//             value = e.target.value;
//             e.target.classList.toggle('cyan')
//         }
//     })

    buttons.forEach((element,index) => {
        if(element.classList.contains('cyan')){
         element.classList.remove('cyan')
            }
        element.addEventListener('click',function() {
        element.classList.toggle('cyan')
        })  

      });





