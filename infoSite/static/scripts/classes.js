/* document.addEventListener('DOMContentLoaded', () => {
    let clapper = 1;

    const premierClass = document.querySelector('#PremierePro');

    const newspaperSpinning = [
          { transform: 'rotate(0) scale(1)' },
          { transform: 'rotate(360deg) scale(0)' }
        ];

        const newspaperTiming = {
          duration: 2000,
          iterations: 1,
        }

        const newspaper = document.querySelector("#test");

        newspaper.addEventListener('mouseover', () => {
          premierClass.children[1].animate(newspaperSpinning, newspaperTiming);
        });



	premierClass.addEventListener("click", ()=>{
	    switch (++clapper) {

	    case 1:
	    	const clapOpen = document.createElement("img");
	        clapOpen.src = "static/resources/clapperopen.png";
	        clapOpen.alt = "open clapperboard";
	        clapOpen.className = "classImage";
	        premierClass.replaceChild(clapOpen, premierClass.children[1]);
            break;
        case 2:
            const clapClose = document.createElement("img");
	        clapClose.src = "static/resources/clapperclosed.png";
	        clapClose.alt = "closed clapperboard";
	        clapClose.className = "classImage";
	        premierClass.replaceChild(clapClose, premierClass.children[1]);
            break;
        case 3:
            const description = document.createElement("p");
            description.innerHTML = "Superpower Premiere Pro Open to all Middle Schoolers July 18th-July 22nd 5:00-7:00 pm Have you ever wanted to be a superhero? "
            + "With Premiere Pro you can be! In this course you will learn the basics of Premiere Pro, "
            + "including keyframes, masking, and special effects. In addition to learning about the digital side of filmmaking, "
            + "we will also explore the practical side, using miniatures, gravity, and green screens to our advantage. "
            + "The course will culminate with you making a visual effects shot with any superpower of your choosing.";
	    	premierClass.replaceChild(description, premierClass.children[1]);

            clapper = 0;
            break;
        default:
            console.log('not good');
            break;
	    }



	    console.log('hi');

        console.log('bye');

)};

*/
