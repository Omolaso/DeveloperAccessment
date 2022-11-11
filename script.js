const firstName = document.getElementById('first-name');
const firstNameValue = firstName.value.trim();

const lastName = document.getElementById('last-name');
const lastNameValue = lastName.value.trim();

const email = document.getElementById('email');
const emailValue = email.value.trim();

const number = document.getElementById('number');
const numberValue = number.value.trim();

const product = document.getElementById('product');
const business = document.getElementById('business');
const monthlySales = document.getElementById('monthly-sales');


const submitBtn = document.getElementById('submit')
const form = document.getElementById('form');



//validate radio and checkbox
//ensure all inputs are successful before storing to local storage



form.addEventListener('submit', (e) => {
    e.preventDefault();

    //firstname
    if(!firstNameValue){
        setErrorFor(firstName, 'First name cannot be blank');
    }
    else{
        setErrorFor(firstName, '');
    };

    //lastname
    if(!lastNameValue){
        setErrorFor(lastName, 'Last name cannot be blank');
    }
    else{
        setErrorFor(lastName, '');
    };

    //phone-number
    if(!numberValue){
        setErrorFor(number, 'Include a phone number. Format: xxxx-xxx-xxxx');
    }else if(!validPhoneNumber(numberValue)){
        setErrorFor(number, 'Invalid Phone Number. Format: xxxx-xxx-xxxx')
    }
    else{
        setErrorFor(number, '');
    }

    //email
    if(!emailValue){
        setErrorFor(email, 'Email cannot be blank')
    }else if(!validEmail(emailValue)){
        setErrorFor(email, 'Invalid Email')
    }
    else{
        setErrorFor(email, '')
    }

    // const productValue = product.value.trim();
    // if(product.value === ''){
    //     setErrorFor(product, 'Please select a location')
    // }else{
    //     setSuccessFor(product);
    //     localStorage.setItem('Where Do You Sell', `${productValue}`)
    // }

    // const monthlySalesValue = monthlySales.value.trim();
    // if(monthlySales.value === ''){
    //     setErrorFor(monthlySales, 'Please specify your monthly sales')
    // }else{
    //     setSuccessFor(monthlySales)
    //     localStorage.setItem('Average Monthly Sales', `${monthlySalesValue}`)
    // }

    // const businessValue = business.value.trim();
    // if(business.value === ''){
    //     setErrorFor(business, 'Please specify your business type')
    // }else{
    //     setSuccessFor(business)
    //     localStorage.setItem('Business Type', `${businessValue}`)
    // }

    finalSubmit();
});



// VALIDATIONS
function setErrorFor(input, message){
    const formInput = input.parentElement;
    const small = formInput.querySelector('small');
    small.innerText = message;
    small.style.color = '#e74c3c';

    if(!small.innerText){
        formInput.classList = 'formInput success';
    }else{
        formInput.classList = 'formInput error';
    }
};


// email regex
function validEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/.test(email);
}

//phone number regex
function validPhoneNumber(number) {
    // return /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/.test(number);
    return /[0-9]{4}-[0-9]{3}-[0-9]{4}/.test(number);
}
    

//ONKEYUP && ONBLUR EVENTS
// email
function emailChangedValue(){

    if(!emailValue){
        setErrorFor(email, 'Email cannot be blank');
        submitBtn.disabled = true;
        // console.log('You cant submit');
    }
    else if(!validEmail(emailValue)){
        setErrorFor(email, 'Invalid Email');
        submitBtn.disabled = true;
        // console.log('You cant submit');
    }
    else{
        setErrorFor(email, '');
        submitBtn.disabled = false;
        console.log("You can submit");
    }
};

//phone
function numberChangedValue(){

    if(!numberValue){
        setErrorFor(number, 'Include a phone number. Format: xxxx-xxx-xxxx');
        submitBtn.disabled = true;
        // console.log('You cant submit');
    }
    else if(!validPhoneNumber(numberValue)){
        setErrorFor(number, 'Invalid Phone Number. Format: xxxx-xxx-xxxx');
        submitBtn.disabled = true;
        // console.log('You cant submit');
    }
    else{
        setErrorFor(number, '');
        submitBtn.disabled = false;
        // console.log("You can submit");
    }
};

//firstname
function firstNameValueCheck(){
    if(!firstNameValue){
        setErrorFor(firstName, 'Name cannot be blank');
    }
    else{
        setErrorFor(firstName, '');
    }
};

function lastNameValueCheck(){
    if(!lastNameValue){
        setErrorFor(lastName, 'Name cannot be blank');
    }
    else{
        setErrorFor(lastName, '');
    }
};

// VALIDATIONS END


function clearFormInputs(){
    form.reset();
}

function storeInputValues(){
    alert('Your details are now stored in the local storage');
    localStorage.setItem('Email Address', `${email.value}`);
    localStorage.setItem('Phone Number', `${number.value}`)

};

function finalSubmit(){
    if(!firstName.value || !lastName.value || !email.value || !number.value){
        return;
        // console.log('no');
    }
    else{
        storeInputValues();
        clearFormInputs();
    }
};