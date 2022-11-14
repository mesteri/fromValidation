var signUpForm = document.querySelector('#signUpForm');
var userNameField = document.querySelector('#userNameField');
var userNameErrorMessage = document.querySelector('#userNameErrorMessage');

signUpForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    if(signUpForm.username.value ){
        userNameField.classList.add('errorField');    
        userNameErrorMessage.classList.remove('hidden');
        console.log('You need to enter a username');
    }

    console.log(signUpForm.username.value);
});
