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


const submitBtn = document.getElementById('form');
submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    location.reload();

    const firstNameValue = firstName.value
    if(firstName.value === ''){
        return
    }else{
        localStorage.setItem('First Name', `${firstNameValue}`)
    };

    const lastNameValue = lastName.value
    if(lastName.value === ''){
        return
    }else{
        localStorage.setItem('Last Name', `${lastNameValue}`)
    };

    const numberValue = number.value
    if(number.value === ''){
        return
    }else{
        localStorage.setItem('Phone Number', `${numberValue}`)
    }

    const emailValue = email.value
    if(email.value === ''){
        return
    }else{
        localStorage.setItem('Email Address', `${emailValue}`)
    }

    const productValue = product.value
    if(product.value === ''){
        return
    }else{
        localStorage.setItem('Where Do You Sell', `${productValue}`)
    }

    const monthlySalesValue = monthlySales.value
    if(monthlySales.value === ''){
        return
    }else{
        localStorage.setItem('Average Monthly Sales', `${monthlySalesValue}`)
    }

    const businessValue = business.value
    if(business.value === ''){
       return
    }else{
        localStorage.setItem('Business Type', `${businessValue}`)
    }

    if(checkbox){
        localStorage.setItem('Agree to our terms?', 'Yes')
    }else{
        return
    }

    const radioButtons = document.querySelectorAll('input[name ="interest"]');
    for (const radioButton of radioButtons) {
        if(radioButton.checked){
            localStorage.setItem('Interested in business management software?', `${radioYes.value}`)
        }
    }

    //PREVIOUSLY DONE

    // if(radioYes){
    //     localStorage.setItem('Interested in business management software?', `${radioYes.value}`)
    // }else{
    //     return
    // }

    // if(radioNo){
    //     localStorage.setItem('Interested in business management software?', `${radioNo.value}`)
    // }else{
    //     return
    // }
    
});