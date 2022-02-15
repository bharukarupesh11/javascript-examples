//Click Me button code
function buttonClickMe(){
    alert('Oh! You have clicked me');
}

//Image switcher code
let firefoxImage = document.querySelector('img');

firefoxImage.onclick = function(){
    let firefoxImageSrc = firefoxImage.getAttribute('src');
    console.log(`firefoxImageSrc = ${firefoxImageSrc}`);
    if(firefoxImageSrc === 'images/firefox-page.jpg'){
        firefoxImage.setAttribute('src', 'images/firefox-icon.png');
    }else{
        firefoxImage.setAttribute('src', 'images/firefox-page.jpg');
    }
}

//Personalised name code
let myButton = document.getElementById('changeUser');
console.log("my button : " +myButton);
let myHeading = document.querySelector('h1');

function setUserName(){
    let userName = prompt('Please enter your name.');
    console.log('User Name: ' +userName);   
    
    if(userName == null) {
        myHeading.textContent = 'Mozilla is cool';
    } else if(userName.trim() == "" && userName != null) {
        setUserName();
    }else {
        localStorage.setItem('username', userName);

        if(!localStorage.getItem('username')) {
            setUserName();
        } else {
            myHeading.textContent = 'Mozilla is cool, ' +localStorage.getItem('username');
            localStorage.clear();
        }

    }
 
}

myButton.onclick = function(){
    setUserName();
}  