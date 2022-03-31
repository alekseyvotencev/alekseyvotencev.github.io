document.addEventListener("DOMContentLoaded", function () {

  // header search

  document.querySelector('.header__search').addEventListener('click', function () {
    if (document.documentElement.scrollWidth <= 985) {
      document.querySelector('.header__burger').style.opacity = '0';
      document.querySelector('.header__picture').style.opacity = '0';
    }
    document.querySelector('.header__search-container').classList.add('header__search-container--active');
    document.querySelector('.header__search-input').classList.add('header__search-input--active');
    document.querySelector('.header__search-cross').classList.add('header__search--active');

  });
  document.querySelector('.header__search-cross').addEventListener('click', function () {
    if (document.documentElement.scrollWidth <= 985) {
      document.querySelector('.header__burger').style.opacity = '1';
      document.querySelector('.header__picture').style.opacity = '1';
    }
    this.classList.remove('header__search--active');
    document.querySelector('.header__search-input').classList.add('header__search--display');
    document.querySelector('.header__search-container').classList.remove('header__search-container--active');
    document.querySelector('.header__search-input').classList.remove('header__search-input--active');
  });

  // scrollbar (hero menu)

  document.querySelectorAll('.hero___dropdown-list').forEach(item => {
    new SimpleBar(item, {
      autoHide: false,
      scrollbarMaxSize: 28,
    });
  });

  // select

  const gallerySelect = document.querySelector('.gallery__select');
  const galleryChoices = new Choices(gallerySelect, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });

  const burger = document.querySelector('.header__burger');
  const cross = document.querySelector('.header__cross');
  const burgerMenu = document.querySelector('.header__nav-container');
  burger.addEventListener('click', function () {
    burger.classList.toggle('header__burger--inactive');
    cross.classList.toggle('header__cross--active');
    burgerMenu.classList.toggle('header__nav-container--active');
  });

  cross.addEventListener('click', function () {
    cross.classList.toggle('header__cross--active');
    burger.classList.toggle('header__burger--inactive');
    burgerMenu.classList.toggle('header__nav-container--active');
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
  });

  // swipers

  const swiper1 = new Swiper('.swiper1', {

    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 100,
    breakpoints: {
      1600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
      1000: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38
      }
    },

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
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 100,
    breakpoints: {
      1800: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50
      },
      1025: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },
      739: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      }
    },

    navigation: {
      nextEl: '.swiper2-button-next',
      prevEl: '.swiper2-button-prev',
      disabledClass: 'swiper2-button-disabled',
    },

    pagination: {
      el: '.swiper2-pagination',
    },
  });

  const swiper3 = new Swiper('.swiper3', {

    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 100,

    navigation: {
      nextEl: '.swiper3-button-next',
      prevEl: '.swiper3-button-prev',
    },

    breakpoints: {
      1800: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 50
      },
      739: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34
      }
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


});


