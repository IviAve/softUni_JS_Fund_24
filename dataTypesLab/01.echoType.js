function echoType (parameter){
console.log(typeof parameter);
if(typeof parameter === 'string' || typeof parameter === 'number'){
    console.log(parameter);
}else{
    console.log('Parameter is not suitable for printing');
}
    
}

echoType(null)

// Write a JS function that takes one parameter 
// and prints on two lines the type of the parameter and then one of the following:
// •	If the parameter type is either string or number, print its value
// •	Otherwise, print the text 'Parameter is not suitable for printing'
