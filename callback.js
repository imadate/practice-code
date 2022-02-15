// Callback function
function a(cl){
    console.log('function A is called')
    cl();
}

function b(){
    console.log('function B is called')
}

function c(){
    console.log('Function C is called')
}

a(b)