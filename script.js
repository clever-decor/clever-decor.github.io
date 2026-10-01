// Вся текстовая информация и разметка сайта находится в HTML-файлах.
// Этот файл отвечает только за небольшие интерактивные функции.
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.header nav');
  if (menu && nav) menu.addEventListener('click', () => nav.classList.toggle('is-open'));
  const search = document.querySelector('#catalog-search');
  if (search) search.addEventListener('input', () => {
    const query = search.value.toLowerCase();
    document.querySelectorAll('.product').forEach(card => {
      card.hidden = !card.textContent.toLowerCase().includes(query);
    });
  });
  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const message = document.querySelector('.form-message');
    if (message) message.hidden = false;
  });
});
