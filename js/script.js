const swipe = document.getElementById('js--fe-swipe');

swipe.addEventListener("click", () => {
    if (swipe.classList.contains('js--fe-swipe__active')) {
    swipe.classList.remove('js--fe-swipe__active')  
    document.documentElement.style.setProperty('--color-first', '#222222');
    document.documentElement.style.setProperty('--color-third', '#fbf9f7');
    } else {
    swipe.classList.add('js--fe-swipe__active')
    document.documentElement.style.setProperty('--color-first', '#bebebe');
    document.documentElement.style.setProperty('--color-third', '#222222');
    }
});