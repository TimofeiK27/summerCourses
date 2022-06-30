document.addEventListener('DOMContentLoaded', () => {
    const biotexts = document.getElementsByClassName('bio');

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (entry.contentBoxSize[0].inlineSize < 800) {
                entry.target.style['flex-direction'] = 'column';
                entry.target.style['align-items'] = 'center';
                entry.target.firstElementChild.style.removeProperty('max-width');
            } else {
                entry.target.style['flex-direction'] = 'row';
                entry.target.style['align-items'] = 'normal';
                entry.target.firstElementChild.style['max-width'] = '500px';
            }
        }
    })

    console.log(biotexts[0]);
    for (let bio of biotexts) {
        resizeObserver.observe(bio);
    }
});