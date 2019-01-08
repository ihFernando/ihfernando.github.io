const $swipe = document.getElementById('js--fe-swipe')

document.addEventListener('DOMContentLoaded', () => {
    const isNight = new Date().getUTCHours() > 9 &&
                    new Date().getUTCHours() < 22

    if (!isNight) {
        swipeCondition($swipe)
    }
})

$swipe.addEventListener('click', () => {
    swipeCondition($swipe)
})

const swipeCondition = $swipe => {
    const getCheckbox = document.getElementById('js--fe-swipe__checkbox')

    if ($swipe.classList.contains('js--fe-swipe__active')) {
        $swipe.classList.remove('js--fe-swipe__active')
        swipeMode(true)
    } else {
        $swipe.classList.add('js--fe-swipe__active')
        swipeMode(false)
        getCheckbox.setAttribute('checked','')
    }
}

const swipeMode = isModeOn => {
    if (isModeOn) {
        document.documentElement.style.setProperty('--color-first', '#222222')
        document.documentElement.style.setProperty('--color-third', '#fbf9f7')
    } else {
        document.documentElement.style.setProperty('--color-first', '#bebebe')
        document.documentElement.style.setProperty('--color-third', '#222222')
    }
}