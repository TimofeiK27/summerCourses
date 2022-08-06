const langdata = {
    "en": {
        "home": "Project Caravel",
        "about us": "About Us",
        "classes": "Classes",
        "sign up": "Sign Up"
    },
    "ru": {
        "home": "Проект Каравелла",
        "about us": "О Нас",
        "classes": "Классы",
        "sign up": "Регистрация"
    }
};
//apply the language values to the content

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', 'en');
    }
    let zones = document.querySelectorAll('[data-key]');
    applyStrings(zones);
    document.getElementById('langMenu').value = localStorage.getItem('lang');
    document.getElementById('langMenu').addEventListener('change', e => {
        console.log(e.target.value);
        localStorage.setItem('lang', e.target.value);
        applyStrings(document.querySelectorAll('[data-key]'));

    })
});

function applyStrings(elements) {
    let lang = localStorage.getItem('lang');
    elements.forEach(element => {
    let key = element.getAttribute('data-key');
        //console.log(element);
        //console.log(key);

        if (key) {
            element.textContent = langdata[lang][key];
        }
    });
}
