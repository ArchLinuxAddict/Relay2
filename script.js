const pages = document.querySelectorAll('.page');
const homepage = document.getElementById('homepage');
const aboutLink = document.getElementById('aboutlink');
const backBtn = document.getElementById('backBtn');
const yearEl = document.getElementById('footerYear');

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
    page.style.visibility = 'hidden';
  });
  document.getElementById(id).style.visibility = 'visible';
}

hompepage.onclick = () => showPage('homePage');
aboutLink.onclick = () => showPage('aboutlink');
backBtn.onclick = () => showPage('homePage');

function openArticle(index) {
  const article = articles[index];
  const content = document.getElementById('articleContent');
  content.innerHTML = `<h2>${article.title}</h2>${article.content}`;
  showPage('articlePage');
}

