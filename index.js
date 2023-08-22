// Write your solution in this file!
var customerName="bob";
var bestCustomer;
const leastFavoriteCustomer="abc";
function name(){
    return customerName;
}

function upperCaseCustomerName(){
    customerName= customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer= "not bob";
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer= "maybe bob";
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="abcd";
    return leastFavoriteCustomer;
}