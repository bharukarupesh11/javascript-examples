
//Personalised code block
let myButton = document.getElementById('changeUser');
console.log(`myButton: ${myButton}`);


function setUserName(){
    let userName = prompt('Please enter user name');
    let myHeading = document.querySelector('h1');

    console.log(`userName: ${userName}`);
    console.log(`myHeading : ${myHeading}`);

    if(userName == null){
        myHeading.textContent = 'Mozilla is cool';
    } else if(userName.trim() == "" && userName != null) {
        setUserName();
    } else{
        console.log(`userName: ${userName}`);
        myHeading.textContent = 'Mozilla is cool, ' +userName.trim();
    }
}

myButton.onclick = function(){
    setUserName();
}