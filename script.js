carousel = document.querySelector('.bahasa');
items = [...carousel.children];

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    e.target.classList.toggle('active', e.isIntersecting);
    )};
}, { root: carousel, threshold: 0.5 });

items.forEach( item => observer.observe(item));

document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('sendmsg');
const popup = document.getElementById('suksespopup');

form.addEventListener('submit', e => {
  e.preventDefault();
  popup.style.display = 'block';
  setTimeout(() => popup.style.display = 'none', 2000);
  form.reset();
});
});