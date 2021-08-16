let inputField = document.querySelector('.form-field')
let inputBorder = document.querySelector('.input-field')
let errorMsg = document.querySelector('.error-msg1')
let _errorMsg = document.querySelector('.error-msg2')
let select = document.querySelector('.select-tip')
let buttons = document.querySelectorAll('.green-bg')
let _inputField = document.querySelector('.form-field2')
let _inputBorder = document.querySelector('.input-field2')
let inputAmount, tipPercent, noOfPeople;
let wrapper = document.querySelector('.wrapper')
let pointZero = document.querySelector('.point-zero1')
let _pointZero = document.querySelector('.point-zero2')
let reset = document.querySelector('.btn-reset')

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
        let peopleNo =  Number(inputField.value);
        if (peopleNo) {
            inputAmount = peopleNo
        }
        else {
            errorMsg.classList.add('block')
            inputBorder.classList.add('error-border')
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
        let peopleNo =  Number(_inputField.value);
        if (peopleNo) {
            noOfPeople = peopleNo
        }
        else {
            _errorMsg.classList.add('block')
            _inputBorder.classList.add('error-border')
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
 // buttons.forEach((element,index) => {
    //     if(element.classList.contains('cyan')){
    //      element.classList.remove('cyan')
    //         }
    //     element.addEventListener('click',function() {
    //     element.classList.toggle('cyan')
    //     })  
    //   });
select.addEventListener('click', e=> {
    let value;
        if (e.target.classList.contains('custom-btn')) {
            value = e.target.value;
            
        } else if (e.target.classList.contains('btn')) {
            value = e.target.value;
        let tipNo =  Number(e.target.value);
        if (tipNo) {
            tipPercent = tipNo
        }
        }
    })
   
    buttons.forEach((element, index) => {
        element.addEventListener("click", function () {
          buttons.forEach((ele) => ele.classList.remove("cyan"));
          element.classList.toggle("cyan");
          tipPercent = element.value;
        });
      });
      wrapper.addEventListener('keyup', e=> {
          e.preventDefault()
        if (inputAmount && tipPercent && noOfPeople) {
            let tipAmount = inputAmount * tipPercent
            let total = tipAmount / noOfPeople
            pointZero.innerHTML = tipAmount
            _pointZero.innerHTML = total
        }
      }) 
      reset.addEventListener('click', (e) => {
        inputField.value = "";
         _inputField.value = ""; 
         pointZero.innerHTML = "0.00";
         _pointZero.innerHTML = "0.00";
         
      })






