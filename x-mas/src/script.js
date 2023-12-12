var form = document.querySelector('#nameForm');
var submitButton = document.querySelector('#submitButton');
var wishPart = document.querySelector('#kirumasWish');
var nameInput = document.querySelector('#name')
var error = document.querySelector('#error');
var wishMessage = document.querySelector('#wishes');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
     wishMessage.innerHTML='';
    var nameValue = nameInput.value.trim();
    if(nameValue === ''){
      
error.innerHTML= 'Please Enter Your Name';
    }
    else{
    error.innerHTML= '';
    wishPart.style.display = 'block';
    wishMessage.append(nameValue);
    nameInput.value ='';
    }
    
});