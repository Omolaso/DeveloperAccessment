const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const businessLocation = document.getElementById('businessLocation');
const businessType = document.getElementById('businessType');
const monthlySales = document.getElementById('monthly-sales');

// radio-buttons
const radioBtns = document.getElementsByName('interest');
const radioDiv = document.querySelector('.radio');
const radioYes = document.getElementById('yes');
const radioNo = document.getElementById('no');

// check-box
const checkbox = document.getElementById('checkbox');
const checkboxDiv = document.querySelector('.agree');

//form-submit
const submitBtn = document.getElementById('submit')
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    //firstname
    const firstNameValue = firstName.value.trim();
    if(!firstNameValue){
        setErrorFor(firstName, 'First name cannot be blank');
    }
    else{
        setErrorFor(firstName, '');
    };

    //lastname
    const lastNameValue = lastName.value.trim();
    if(!lastNameValue){
        setErrorFor(lastName, 'Last name cannot be blank');
    }
    else{
        setErrorFor(lastName, '');
    };

    //email
    const emailValue = email.value.trim();
    if(!email.value){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!validEmail(emailValue)){
        setErrorFor(email, 'Invalid Email');
    }
    else{
        setErrorFor(email, '')
    };

    //phone-number
    const numberValue = number.value.trim();
    if(!numberValue){
        setErrorFor(number, 'Include a phone number. Format: xxxx-xxx-xxxx');
    }else if(!validPhoneNumber(numberValue)){
        setErrorFor(number, 'Invalid Phone Number. Format: xxxx-xxx-xxxx');
    }
    else{
        setErrorFor(number, '');
    };

    //business location
    const businessLocationValue = businessLocation.value;
    if(!businessLocationValue){
        setErrorFor(businessLocation, 'Please select a business location');
    }else{
        setErrorFor(businessLocation, '');
    };

    //business type
    const businessTypeValue = businessType.value;
    if(!businessTypeValue){
        setErrorFor(businessType, 'Please specify your business type');
    }else{
        setErrorFor(businessType, '');
    };

    //monthly sales
    const monthlySalesValue = monthlySales.value;
    if(!monthlySalesValue){
        setErrorFor(monthlySales, 'Please specify your monthly sales');
    }else{
        setErrorFor(monthlySales, '');
    };

    //radio-buttons
    const radioDivSmall = radioDiv.querySelector('small');
    for(let i = 0; i < radioBtns.length; i++){
        if(radioBtns[0].checked){
            radioDivSmall.innerHTML = '';
        }
        else if(radioBtns[1].checked){
            radioDivSmall.innerHTML = '';
        }
        else {
            radioDivSmall.innerHTML = 'Please check one of these';
            radioDivSmall.style.color = '#e74c3c';
        }
    };

    //checkbox
    const checkboxDivSmall = checkboxDiv.querySelector('small');
    if (checkbox.checked) {
        checkboxDivSmall.innerHTML = '';
    }
    else{
        checkboxDivSmall.innerHTML = 'Please check the box';
        checkboxDivSmall.style.color = '#e74c3c';
    };


    finalSubmit();
});



// VALIDATIONS
function setErrorFor(input, message){
    const formInput = input.parentElement;
    const small = formInput.querySelector('small');
    small.innerText = message;
    small.style.color = '#e74c3c';
};

function setSuccessFor(input){
    input.parentElement.classList.add('success');
};

function removeSuccessFor(input){
    input.parentElement.classList.remove('success');
};

// email regex
function validEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/.test(email);
};

//phone number regex
function validPhoneNumber(number) {
    // return /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/.test(number);
    return /[0-9]{4}-[0-9]{3}-[0-9]{4}/.test(number);
};


//ONKEYUP, ONBLUR  && ONCHANGE EVENTS
//firstname
function firstNameValueCheck(){
    if(!firstName.value){
        setErrorFor(firstName, 'First name cannot be blank');
    }
    else{
        setErrorFor(firstName, '');
        setSuccessFor(firstName);
    }
};

//lastname
function lastNameValueCheck(){
    if(!lastName.value){
        setErrorFor(lastName, 'Last name cannot be blank');
    }
    else{
        setErrorFor(lastName, '');
        setSuccessFor(lastName);
    }
};

// email
function emailChangedValue(){

    if(!email.value){
        setErrorFor(email, 'Email cannot be blank');
        submitBtn.disabled = true;
    }
    else if(!validEmail(email.value)){
        setErrorFor(email, 'Invalid Email');
        submitBtn.disabled = true;
    }
    else{
        setErrorFor(email, '');
        setSuccessFor(email);
        submitBtn.disabled = false;
    }
};

//phone
function numberChangedValue(){

    if(!number.value){
        setErrorFor(number, 'Include a phone number. Format: xxxx-xxx-xxxx');
        submitBtn.disabled = true;
    }
    else if(!validPhoneNumber(number.value)){
        setErrorFor(number, 'Invalid Phone Number. Format: xxxx-xxx-xxxx');
        submitBtn.disabled = true;
    }
    else{
        setErrorFor(number, '');
        setSuccessFor(number);
        submitBtn.disabled = false;
    }
};

//business-location
function businessLocationValueCheck(){
    if(!businessLocation.value){
        setErrorFor(businessLocation, 'Please select a business location');
    }else{
        setErrorFor(businessLocation, '');
    }
};

//business-type
function businessTypeValueCheck(){
    if(!businessType.value){
        setErrorFor(businessType, 'Please specify your business type');
    }else{
        setErrorFor(businessType, '');
    }
};

//monthly-sales
function monthlySalesValueCheck(){
    if(!monthlySales.value){
        setErrorFor(monthlySales, 'Please specify your monthly sales');
    }else{
        setErrorFor(monthlySales, '');
    }

};

// radioBtns onchange
function validateRadioButtonsOnchange(){
    const radioDivSmall = radioDiv.querySelector('small');
    for(let i = 0; i < radioBtns.length; i++){
        if(radioBtns[0].checked){
            radioDivSmall.innerHTML = '';
        }
        else if(radioBtns[1].checked){
            radioDivSmall.innerHTML = '';
        }
        else {
            radioDivSmall.innerHTML = 'Please check one of these';
            radioDivSmall.style.color = '#e74c3c';
        }
    };
};


//checkbox
function validateCheckboxOnchange(){
    const checkboxDivSmall = checkboxDiv.querySelector('small');
    if (checkbox.checked) {
        checkboxDivSmall.innerHTML = '';
    }
    else{
        checkboxDivSmall.innerHTML = 'Please check the box';
        checkboxDivSmall.style.color = '#e74c3c';
    }
};


//FINAL SUBMISSION FUNCTIONS
function clearForm(){
    removeSuccessFor(firstName);
    removeSuccessFor(lastName);
    removeSuccessFor(email);
    removeSuccessFor(number);
    form.reset();
};

function storeInputValues(){
    alert('Your details are now stored in the local storage');
    localStorage.setItem('First Name', `${firstName.value}`);
    localStorage.setItem('Last Name', `${lastName.value}`);
    localStorage.setItem('Email Address', `${email.value}`);
    localStorage.setItem('Phone Number', `${number.value}`);
    localStorage.setItem('Where Do You Sell?', `${businessLocation.value}`);
    localStorage.setItem('Business Type', `${businessType.value}`);
    localStorage.setItem('Average Monthly Sales', `${monthlySales.value}`);

    if(radioYes.checked){
        localStorage.setItem('Will you be interested in integrating a Business Management Software?', radioYes.value);
    }
    else{
        localStorage.setItem('Will you be interested in integrating a Business Management Software?', radioNo.value);
    };

    localStorage.setItem('Do you agree to quickteller business privacy policy?', 'Yes');
};


function finalSubmit(){
    
    if(!firstName.value || !lastName.value || !email.value || !number.value
        || !businessLocation.value || !businessType.value || !monthlySales.value)
        {
            console.log('input');
        return;
    }
    else if(!radioYes.checked || !radioNo.checked){
        console.log('radio');
        return
    }
    else if(!checkbox.checked){
        console.log('checkbox');
        return
    }
    else{
        storeInputValues();
        clearForm();
    }
};