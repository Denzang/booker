/* Hotkeys For Bookmark Web Page */

window.addEventListener('keydown',(event)=>{
    if (event.key === 'g' ) {
        event.preventDefault();
        // window.location.href = "http://github.com";
        window.open("http://github.com","_blank");
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'y' ) {
        event.preventDefault();
        window.open("http://youtube.com","_blank");
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'o' ) {
        event.preventDefault();
        window.open("http://reddit.com","_blank");
    }
})

