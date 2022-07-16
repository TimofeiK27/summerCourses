

//apply the language values to the content
document.addEventListener('DOMContentLoaded', () => {
    fetch('/translations')
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    localStorage.setItem('lang', 'en');
    let zones = document.querySelectorAll('[data-key]');
    applyStrings(zones);
});

function applyStrings(elements) {
    let locale = localStorage.getItem('lang');
    elements.forEach(element => {
        let key = element.getAttribute('data-key');
        //console.log(element);
        //console.log(key);
        /*let lang = locale.substr(0, 2); //first 2 characters*/
        if (key) {
            element.textContent = langdata.languages[lang].strings[key];
        }
    });
}