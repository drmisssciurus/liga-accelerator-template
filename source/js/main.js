const buttonElem = document.querySelector('.main-nav__button');
const modalElem = document.querySelector('.modal');
const anchors = document.querySelectorAll('a[href*="#"]');

const dots = document.getElementById('dots');
const more = document.getElementById('more');
const btn = document.getElementById('btn');

// попап

modalElem.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`;

const closeModal = (event) => {
  const target = event.target;

  if (target === modalElem || target.closest('.modal__close')) {
    modalElem.style.opacity = 0;

    setTimeout(() => {
      modalElem.style.visibility = 'hidden';
    }, 300);
  }
};

const openModal = () => {
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
};

buttonElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);

// аккордеон

document.querySelectorAll('.accordeon-item__trigger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    parent.classList.toggle('accordeon__item--active');
  }));

// якорь

// eslint-disable-next-line no-undef
for (anchor of anchors) {
  // eslint-disable-next-line no-undef
  if (anchor) {
    // eslint-disable-next-line no-undef
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      // eslint-disable-next-line no-undef
      const anchorID = anchor.getAttribute('href');
      document.querySelector(anchorID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}

// подробнее

btn.addEventListener('click', function readMore() {
  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btn.innerHTML = 'Подробнее';
    more.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btn.innerHTML = 'Скрыть';
    more.style.display = 'inline';
  }
});
