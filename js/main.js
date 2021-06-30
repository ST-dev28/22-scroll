const backToTopDOM = document.querySelector('.back-to-top');
const stickyDOM = document.querySelector('header');
//console.log(backToTopDOM);
//console.log(stickyDOM);
let wasStickyAtLeastOneTime = false;
let notStickyTimer = null;

window.addEventListener('scroll', () => {
    if (scrollY > 500) {
        backToTopDOM.classList.remove('hide');
    } else {
        backToTopDOM.classList.add('hide');
    }
    if (scrollY > 150) {                // kai leidziames i apacia
        wasStickyAtLeastOneTime = true;
        stickyDOM.classList.add('sticky')   // jei zemiau 150 ribos, parodyk
        stickyDOM.classList.remove('notSticky');
    } else {
        stickyDOM.classList.remove('sticky');  // jei zemiau 150 ribos, paslepk
        if (wasStickyAtLeastOneTime) {
            stickyDOM.classList.add('notSticky');

            notStickyTimer = setTimeout(() => {
                stickyDOM.classList.remove('notSticky');
                wasStickyAtLeastOneTime = false;
            }, 500)
        }
    }
    // console.log('scrolling...');
})
