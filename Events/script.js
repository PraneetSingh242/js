// Onclick event
// document.getElementById('London').onclick = function(){
//     console.log("Owl Clicked");
    
// }

// attachEvent() -> Internet explorer
// jQuery -> onEvent()
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currenTarget
// clientX, clientY, offset, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode


// document.getElementById('London').addEventListener('click', function(event){
//     console.log(event);
    
//     alert("London clicked");
    
// }, false)

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault();
//     console.log("google clicked");
    
// })

    document.querySelector('#images').addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target.parentNode);
        console.log(e.target.tagName);

        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            
            let removeIt = e.target.parentNode;
            removeIt.remove();
        }
       
        
    }, false)



