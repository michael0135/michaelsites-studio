const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-navigation');
const navLinks = document.querySelectorAll('.nav-list a');
const reviewForm = document.getElementById('review-form');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (primaryNav.classList.contains('open')) {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const business = document.getElementById('business').value.trim();
  const email = document.getElementById('email').value.trim();
  const website = document.getElementById('website').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent('Free Website Review Request');
  const bodyLines = [
    `Name: ${name}`,
    `Business name: ${business}`,
    `Email: ${email}`,
    `Current website or Facebook page: ${website}`,
    '',
    'Project details:',
    message,
  ];
  const body = encodeURIComponent(bodyLines.join('\n'));
  const mailtoLink = `mailto:michaelsitesstudio@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
  reviewForm.reset();
});

const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}
