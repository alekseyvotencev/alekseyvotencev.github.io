document.addEventListener("DOMContentLoaded", function () {

  // header search

  const burger = document.querySelector('.header__burger');
  const headerPicture = document.querySelector('.header__picture');
  const headerSearchCross = document.querySelector('.header__search-cross');
  document.querySelector('.header__search').addEventListener('click', function () {
    if (document.documentElement.scrollWidth <= 992) {
      burger.style.display = 'none';
      headerPicture.style.display = 'none';
    }
    document.querySelector('.header__search-container').classList.add('header__search-container--active');
  });
  headerSearchCross.addEventListener('click', function () {
    if (document.documentElement.scrollWidth <= 992) {
      burger.style.display = 'block';
      headerPicture.style.display = 'block';
    }
    document.querySelector('.header__search-container').classList.remove('header__search-container--active');
  });

  // scrollbar (hero menu)

  document.querySelectorAll('.hero___dropdown-list').forEach(item => {
    new SimpleBar(item, {
      autoHide: false,
      scrollbarMaxSize: 28,
    });
  });

  let wrappers = document.querySelectorAll('.simplebar-content-wrapper');
  wrappers.forEach(element => {
    element.setAttribute("tabindex", -1);
  });

  // select

  const gallerySelect = document.querySelector('.gallery__select');
  const galleryChoices = new Choices(gallerySelect, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });


  function toggleBurgerClasses() {
    burgerMenu.classList.toggle('header__nav-container--active');
    cross.classList.toggle('header__cross--active');
    document.body.classList.toggle('overflow');
  }

  const cross = document.querySelector('.header__cross');
  const burgerMenu = document.querySelector('.header__nav-container');
  if (document.documentElement.scrollWidth <= 1199) {
    let links = document.querySelectorAll('.header__link');
    links.forEach(link => {
      link.addEventListener('click', function () {
        toggleBurgerClasses();
      });
    });
  }

  burger.addEventListener('click', function () {
    toggleBurgerClasses();
  });

  cross.addEventListener('click', function () {
    cross.classList.toggle('header__cross--active');
    burgerMenu.classList.toggle('header__nav-container--active');
    document.body.classList.toggle('overflow');
  });



  // hero menu buttons 

  document.querySelectorAll('.hero__list-button').forEach(listBtn => {
    listBtn.addEventListener('click', function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector('.hero__container-dropdown');

      document.querySelectorAll('.hero__container-dropdown').forEach(container => {
        if (container != dropdown) {
          container.classList.remove('hero__container-dropdown--active');
        }
      })
      dropdown.classList.toggle('hero__container-dropdown--active');
    })
  })

  document.querySelectorAll('.hero__list-button').forEach(listBtn => {
    listBtn.addEventListener('mousedown', function (event) {
      event.preventDefault();
    })
  });

  // swipers


  const heroSwiper = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
  })

  const swiper1 = new Swiper('.swiper1', {

    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 100,
    breakpoints: {
      1601: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
      1000: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      768: {
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
      993: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },
      755: {
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
      clickable: true,
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
      586: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34
      }
    },
  });

  // modal

  const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
  });

  // tabs

  const tabsBtn = document.querySelectorAll('.catalog__tabs-artist');
  tabsBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__tabs-artist').forEach(function (btn) {
        btn.classList.remove('catalog__tabs-artist--active')
      });

      e.currentTarget.classList.add('catalog__tabs-artist--active');

      document.querySelectorAll('.tabs-item').forEach(function (item) {
        item.classList.remove('tabs-item--active')
      });

      document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
        tab.classList.add('tabs-item--active');
      });
    });
  });

  if (document.documentElement.scrollWidth <= 992) {
    tabsBtn.forEach(btn => {
      btn.addEventListener('click', function () {
        const item = document.querySelector('.tabs-item--active');
        item.scrollIntoView();
      })
    });
  };

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
  const form = document.querySelector('.contacts__form');
  const name = document.querySelector('input[type="text"]');
  const tel = document.querySelector('input[type="tel"]');
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
    .onSuccess(() => {
      let formData = [name.value, tel.value]
      let response = fetch('sendmail.php', {
        method: 'POST',
        body: formData
      })
      if (response.ok) {
        let result = response.json();
        alert(result.message);
        form.reset();
      }
    })

  $('.accordion').accordion({
    collapsible: true,
    heightStyle: "content",
  });


  tippy.setDefaultProps({
    trigger: 'click',
    theme: 'purple',
  });

  tippy('#projects__tooltip-one', {
    content: 'Пример современных тенденций - современная методология разработки',
  });

  tippy('#projects__tooltip-two', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  });

  tippy('#projects__tooltip-three', {
    content: 'В стремлении повысить качество',
  });
});


