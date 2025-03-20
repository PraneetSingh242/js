function changeBgColor(bgcolor, color){
    document.body.style.backgroundColor = bgcolor;
    document.body.style.color = color;
}
// function changeBgWhite(){
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
// }

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor
    if (!currentColor || currentColor == 'white') {
        changeBgColor('black', 'white');
        themeButton.innerText = 'Light Mode'
    }
    else{
        changeBgColor('white', 'black');
        themeButton.innerText = 'Dark Mode'
    }
    
});