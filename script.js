const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const product = document.getElementById('product');
const business = document.getElementById('business');
const monthlySales = document.getElementById('monthly-sales');
const radioYes = document.getElementById('yes');
const radioNo = document.getElementById('no');
const checkbox = document.getElementById('checkbox');



//validate radio and checkbox
//ensure all inputs are successful before storing to local storage



const submitBtn = document.getElementById('form');
submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    if(setSuccessFor === true){
        console.log('hi');
     }else{
        // localStorage.setItem('First Name', `${firstNameValue}`);
        // localStorage.setItem('Last Name', `${lastNameValue}`)
        console.log('hey');
     }

    const firstNameValue = firstName.value.trim();
    if(firstNameValue === ''){
        setErrorFor(firstName, 'First name cannot be blank')
    }else if (firstNameValue.length <= 2) {
        setErrorFor(firstName, 'Must be above 3 letters')
    }
    else{
        setSuccessFor(firstName)
    };

    const lastNameValue = lastName.value.trim();
    if(lastName.value === ''){
        setErrorFor(lastName, 'Last name cannot be blank');
    }else if (lastNameValue.length <= 2) {
        setErrorFor(lastName, 'Must be above 3 letters')
    }
    else{
        setSuccessFor(lastName)
    };

    const numberValue = number.value.trim();
    if(number.value === ''){
        setErrorFor(number, 'Include a phone number');
    }else if(numberValue.length <= 10 || numberValue.length > 15 ){
        setErrorFor(number, 'Invalid Phone Number')
    }
    else{
        setSuccessFor(number);
        localStorage.setItem('Phone Number', `${numberValue}`)
    }

    const emailValue = email.value.trim();
    if(email.value === ''){
        setErrorFor(email, 'Email cannot be blank')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Invalid Email')
    }
    else{
        setSuccessFor(email);
        localStorage.setItem('Email Address', `${emailValue}`)
    }

    const productValue = product.value.trim();
    if(product.value === ''){
        setErrorFor(product, 'Please select a location')
    }else{
        setSuccessFor(product);
        localStorage.setItem('Where Do You Sell', `${productValue}`)
    }

    const monthlySalesValue = monthlySales.value.trim();
    if(monthlySales.value === ''){
        setErrorFor(monthlySales, 'Please specify your monthly sales')
    }else{
        setSuccessFor(monthlySales)
        localStorage.setItem('Average Monthly Sales', `${monthlySalesValue}`)
    }

    const businessValue = business.value.trim();
    if(business.value === ''){
        setErrorFor(business, 'Please specify your business type')
    }else{
        setSuccessFor(business)
        localStorage.setItem('Business Type', `${businessValue}`)
    }

//   console.log(checkbox.checked)

    if(checkbox.checked === true){
        localStorage.setItem('Agree to our terms?', 'Yes')
        // setErrorFor(checkbox, '')
        // console.log('true');
    }
    // else{
    //    setErrorFor(checkbox, 'Please check the box')
    // }

    // const radioButtons = document.querySelectorAll('input[name ="interest"]');
    // for (const radioButton of radioButtons) {
    //     if(radioButton){
    //         localStorage.setItem('Interested in business management software?', `${radioButton.value}`)
    //     }
    // }
});



// FUNCTIONS

function setErrorFor(variable, message){
    //note: the variable parameter is for EACH inputs that is why it can be changed when called.

    const formInput = variable.parentElement;
    const small = formInput.querySelector('small');
    small.innerText = message
    //error class
    formInput.classList = 'formInput error';
}

function setSuccessFor(variable){
    const formInput = variable.parentElement;
    formInput.classList = 'formInput success';
}

// email validation
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//phone validation
// function isPhone(number) {
//     return /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
// }
    
