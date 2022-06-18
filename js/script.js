/**
 * Set current year on Footer
 */
const $year = document.getElementById("js--fe-set-current-year");

const setCurrentYearOnFooter = () => {
  const currentYear = new Date().getFullYear();

  $year.innerHTML = currentYear;
};

/**
 * Swipe theme
 */
const $swipe = document.getElementById("js--fe-swipe");

$swipe.addEventListener("click", () => {
  swipeCondition($swipe);
});

const swipeCondition = ($swipe) => {
  const getCheckbox = document.getElementById("js--fe-swipe__checkbox");

  if ($swipe.classList.contains("js--fe-swipe__active")) {
    $swipe.classList.remove("js--fe-swipe__active");
    swipeMode(true);
  } else {
    $swipe.classList.add("js--fe-swipe__active");
    swipeMode(false);
    getCheckbox.setAttribute("checked", "");
  }
};

const swipeMode = (isModeOn) => {
  if (isModeOn) {
    document.documentElement.style.setProperty("--color-first", "#222222");
    document.documentElement.style.setProperty("--color-third", "#fbf9f7");
  } else {
    document.documentElement.style.setProperty("--color-first", "#bebebe");
    document.documentElement.style.setProperty("--color-third", "#222222");
  }
};

/**
 * Set fadeEffect with 500ms to all fe-fade-in
 */
const fadeEffect = () => {
  const $els = document.getElementsByClassName("fe-fade-in");

  let count = 0;

  setInterval(() => {
    if (count === $els.length) {
      clearInterval(this);
    } else {
      $els[count].classList.add("fe-fade-in__active");
      count += 1;
    }
  }, 500);
};

/**
 * Dispatch Event on DOM Loaded
 */
document.addEventListener("DOMContentLoaded", () => {
  setCurrentYearOnFooter();

  const isNight = new Date().getUTCHours() > 9 && new Date().getUTCHours() < 22;

  if (!isNight) {
    swipeCondition($swipe);
  }

  fadeEffect();
});
