/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndexA = 1;

/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndexA);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndexA += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndexA -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(a) {
    showSlides(slideIndexA = a);

}


/* Функция перелистывания: */
function showSlides(a) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("reviews__item");

    /* Проверяем количество слайдов: */
    if (a > slides.length) {
      slideIndexA = 1
    }
    if (a < 1) {
        slideIndexA = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndexA - 1].style.display = "flex";

}

