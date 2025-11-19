/* Modified hotkeys with an array containing all the hotkeys mapped to their URLs */

const hotkeysArray = new Map([
    [ 'r' , 'https://www.reddit.com/' ],
    [ 'g' , 'https://www.github.com/' ],
    [ 'y' , 'https://www.youtube.com/'],
    [ 'l' , 'https://lding.wcraz.com/' ],
    ['n', 'https://pad.wcraz.com/']
]);

console.log("Hotkeys Active");

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toLowerCase();

    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagname === "INPUT" || activeElement.tagName === 'TEXTAREA')) {
        return;
}

    if (event.ctrlKey || event.altKey || event.metaKey) {
        return;
    }

    const url = hotkeysArray.get(pressedKey);

    if (url) {
        console.log(`Hotkey '${pressedKey}' was entered, opening ${url}`);
        window.open(url, '_blank');

        event.preventDefault();
    }
});