const pages = document.querySelectorAll('.page');
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const musicLink = document.getElementById('musicLink');
const backBtn = document.getElementById('backBtn');
const yearEl = document.getElementById('footerYear');
const register = document.getElementById('Register');
const done = document.getElementById('Done');


const articles = [
  {
    title: "The Art of Simplicity",
    content: "<p>Simplicity is the ultimate sophistication...</p>"
  },
  {
    title: "Focus in a Distracted World",
    content: "<p>In a world filled with noise, true focus is rare...</p>"
  },
  {
    title: "Designing Without Color",
    content: "<p>Sometimes grayscale can speak louder than colors...</p>"
  }
]

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function showPage(id) {
  pages.forEach(page => {
    page.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

homeLink.onclick = () => showPage('homePage');
aboutLink.onclick = () => showPage('aboutPage');
musicLink.onclick = () => showPage('musicPage');
backBtn.onclick = () => showPage('homePage');
register.onclick = () => showPage('Register');
done.onclick = () => showPage('Done');


function openArticle(index) {
  const article = articles[index];
  const content = document.getElementById('articleContent');
  content.innerHTML = `<h2>${article.title}</h2>${article.content}`;
  showPage('articlePage');

}
