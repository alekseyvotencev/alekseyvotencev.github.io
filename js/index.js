// select

const gallerySelect = document.querySelector('.gallery__select');
const galleryChoices = new Choices(gallerySelect, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
});

// hero menu buttons 


document.querySelectorAll('.hero__list-button').forEach(listBtn => {
  listBtn.addEventListener('click', function () {
    let btn = this;
    let dropdown = this.parentElement.querySelector('.hero__container-dropdown');

    document.querySelectorAll('.hero__list-button').forEach(listBtn => {
      if (listBtn != btn) {
        listBtn.classList.remove('hero__list-button--active');
      }
    });

    document.querySelectorAll('.hero__container-dropdown').forEach(container => {
      if (container != dropdown) {
        container.classList.remove('hero__container-dropdown--active');
      }
    })
    dropdown.classList.toggle('hero__container-dropdown--active');
    btn.classList.toggle('hero__list-button--active');
  })
})

document.querySelectorAll('.hero__list-button').forEach(listBtn => {
  listBtn.addEventListener('mousedown', function (event) {
    event.preventDefault();
  })
})

// swipers

const swiper1 = new Swiper('.swiper1', {

  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 3,


  navigation: {
    nextEl: '.swiper1-button-next',
    prevEl: '.swiper1-button-prev',
  },

  pagination: {
    el: '.swiper1-pagination',
    type: "fraction",
  },
});

const swiper2 = new Swiper('.swiper2', {

  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,

  navigation: {
    nextEl: '.swiper2-button-next',
    prevEl: '.swiper2-button-prev',
  },
});

const swiper3 = new Swiper('.swiper3', {

  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

  navigation: {
    nextEl: '.swiper3-button-next',
    prevEl: '.swiper3-button-prev',
  },
});

// tabs

document.querySelectorAll('.catalog__tabs-artist').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.catalog__tabs-artist').forEach(function (btn) {
      btn.classList.remove('catalog__tabs-artist--active')
    });

    e.currentTarget.classList.add('catalog__tabs-artist--active');

    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });

    document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
      tab.classList.add('tabs-item--active');
    })
  });
});

// map

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("custom__map", {
    center: [55.758468, 37.601088],
    zoom: 16
  });

  var placemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/geoObject.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-24, -48]
  });

  myMap.geoObjects.add(placemark);
}

// input mask

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

// validation
const validation = new JustValidate('#contacts__form');

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя'
    },
    {
      rule: 'customRegexp',
      value: '^((?=.*[А-Я])||(?=.*[а-я]).{2,30})$',
      errorMessage: 'Недопустимый формат'
    },
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Введите номер телефона'
    }
  ])
  .addField('#phone', [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Недопустимый формат'
    }
  ])

$('.accordion').accordion({
  collapsible: true,
  heightStyle: "content",
});

// scrollbar (hero menu)

new SimpleBar(document.getElementsByClassName('.hero__container-dropdown'), {
  autoHide: false,
  scrollbarMaxSize: 28,
});


