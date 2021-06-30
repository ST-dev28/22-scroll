const backToTopDOM = document.querySelector('.back-to-top');
const stickyDOM = document.querySelector('header');
//console.log(backToTopDOM);
console.log(stickyDOM);

window.addEventListener('scroll', () => {
    if (scrollY > 500) {
        backToTopDOM.classList.remove('hide');
    }
    else {
        backToTopDOM.classList.add('hide');
    }
    if (scrollY > 150) {
        stickyDOM.classList.add('sticky')   // jei zemiau 150 ribos, parodyk
        stickyDOM.classList.remove('notSticky');
    }
    else {
        stickyDOM.classList.remove('sticky');  // jei zemiau 150 ribos, paslepk
        stickyDOM.classList.add('notSticky');
    }
    // console.log('scrolling...');
})
