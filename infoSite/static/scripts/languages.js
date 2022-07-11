let langdata = require('./translations.json');

//apply the language values to the content
document.addEventListener('DOMContentLoaded', () => {

    let zones = document.querySelectorAll('[data-key]');
    applyStrings(zones);
});

function applyStrings(containers) {
    let locale =
    containers.forEach(container => {
        //find all the elements that have data-key
        let locale = container.getAttribute('lang');
        //console.log('looking inside of ', locale);
        container.querySelectorAll(`[data-key]`).forEach(element => {
            let key = element.getAttribute('data-key');
            //console.log(element);
            //console.log(key);
            let lang = locale.substr(0, 2); //first 2 characters
            if (key) {
                element.textContent = langdata.languages[lang].strings[key];
            }
        });
    })
}