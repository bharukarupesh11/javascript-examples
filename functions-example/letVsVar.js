
// When we declare a variable with 'var' keyword, it's scope is not limited to the block in which 
// it is defined; instead it is limited to the function 

// var => function-scoped
// ES6 (ES 2015): let, const => block-scoped
function start(){
    for(var i = 0; i < 5; i++){
        console.log(i); //Output: 0,1,2,3,4
    }
    console.log(i); // 'i' isaccessible here. Output: 5
}

start();