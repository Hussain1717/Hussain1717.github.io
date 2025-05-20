const firstname = document.getElementById('firstname').value;
const middlename = document.getElementById('middlename').value;
const lastname = document.getElementById('lastname').value;
const phone = document.getElementById('phone').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const male = document.getElementById('male').value;
const female = document.getElementById('female').value;

const form = document.getElementById('form');
const errorElement = document.getElementById('error');


//Add regular expressions

var valid = 1;

//Now, regular expressions
//Declare regular expression for lastname
var lnreg = /^[a-zA-Z]+$/
//Regular expression for email
var emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z]{2,}$/
//Regular expression for phone number
var regphone = /^[0-9]+$/

form.addEventListener('submit', (e) => {
    let messages = []
    if(firstname.trim() == '' || firstname.trim() == null) {
        messages.push('First name is required')
    }

    if(middlename.trim() == '' || middlename.trim() == null) {
        messages.push('Middle name is optional')
    }

    //Validate phone number with above regular expression
    // if(phone.trim() == '' &&  valid == 1){
    //     document.getElementById('wrongtel').innerHTML = 'inline'
    //     document.getElementById('wrongtel').innerHTML = 'Enter phone number'
    //     valid = 0;

    // }

    if(messages.length > 0 ){
        e.preventDefault()
        errorElement.innerHTML = messages.join(', \n')
    }
})