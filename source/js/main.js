document.querySelectorAll('.accordeon-item__trigger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    parent.classList.toggle('accordeon__item--active');
  }));
