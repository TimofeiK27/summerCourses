const langdata = {
    "en": {
        "home": "Project Caravel",
        "about us": "About Us",
        "classes": "Classes",
        "sign up": "Sign Up",
        "welcome text":"Welcome to the Caravel Project!",
        "catchphrase":"Classes to empower and inspire teen Ukrainian refugees",
        "student projects button":"Click Here To See Student's Web Development HTML files",
        "description of all classes":"Right now we are providing three classes, their descriptions are below.",
        "Classes title":"Classes",
        "classes offered for ages":"All classes are offered for ages 11-14",
        "classes take place on Mon Wed":"Classes will take place on Mondays and Wednesdays from July 18th to August 3rd",
        "dates":"July 18th, July 20th, July 25th, July 27th, August 1st, August 3rd",
        "classes will be held":"Classes will be held at the following times",
        "coding time":"Coding: 12:00 pm to 1:20 pm",
        "film time":"Filmmaking: 1:30 pm to 2:50 pm",
        "draw time":"Drawing: 3:00 pm to 4:20 pm",
        "webDev title":"Website Development (Coding)",
        "webDev body":"Developing your own website might seem like a challenge, but this course helps break it down into simple ideas. In this class, you will use HTML, CSS, and Javascript to design and develop interactive webpages. Students will get to choose their own website ideas which they will implement and put on the web. Creativity has no boundaries with this class and students visions for website will become reality.",
        "scratch title":"Coding with Scratch (Coding)",
        "scratch coding": "Have you ever wanted to make your own game? Well now you can! In this course, we will use Block coding to make game design easier than ever before. This course is a perfect introduction for beginners to the awesome world of coding. Students will use Scratch and Code.org to design fun games and solve challenging problems. You will learn to problem solve and think like a real computer scientist, and have lots of fun along the way!",
        "film title":"Film Making",
        "film body":"Have you ever wanted to be a superhero? With Premiere Pro you can be! In this course you will learn the basics of Premiere Pro, including keyframes, masking, and special effects. In addition to learning about the digital side of filmmaking, we will also explore the practical side, using miniatures, gravity, and green screens to our advantage. The course will culminate with you making a visual effects shot with any superpower of your choosing.",
        "art title":"Art",
        "art body":"In this course you will learn the basics of sketching, inking, and cartooning! We will explore different styles, the fundamentals of drawing, shapes, and expressions as we learn how to view the world through the eye of a cartoonist. This course welcomes people of all levels of experience to come and try out cartooning for themselves.",
        "about us title":"About Us",
        "evan":"Evan Meltzer",
        "evan bio":"Evan loved filmmaking since he was 8 years old. He has been using Premiere Pro for 7 years and Blender for 2 years. Evan has experience filming and editing promotional, educational, and informational content for a variety of organizations including Lucky Pen, 5th Avenue Theater, ASSA Games, Eastside Prep, iMiracle, and more.",
        "timofei":"Timofei Kachan",
        "timofei bio":" Timofei has always had a passion for math and computer science. He started programming with code.org and scratch, and then pursued more ambitious goals like website development (creating this website with Max). He also loves playing the saxaphone, skiing, and his cats.",
        "max":"Max Trapido",
        "max bio":"Max is a programmer who is proficient in Java and spends a lot of his free time learning new concepts and making video games. He has taught kids in the past and loves to help people learn. He is also an avid musician and plays the guitar. His dream is to become a rockstar.",
        "zoe":"Zoe Maris",
        "zoe bio":"Zoe has been taking art classes since she was 5 years old and has loved cartoons for even longer. She has experience in a variety of art mediums, with a specialty in ink, sketch, graphite, and charcoal.",
        "dan":"Daniel Kreymer",
        "dan bio":"Dan has appreciated the art of teaching for years! Through various classes hosted by the Lucky Pen and tutoring on his own time, Dan is thrilled to spread excitement and allow students to explore new skills. With experience in both the technical (editing and animation) and the arts (music), Dan is beyond excited to spread everything he has learned, with those wishing to traverse new concepts!",

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
            element.innerHTML = langdata[lang][key];
        }
    });
}
