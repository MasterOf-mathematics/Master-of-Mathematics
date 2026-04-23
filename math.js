const classesLink = document.getElementById('classes-link');
const submenu = document.getElementById('classes-submenu');
const navLinks = document.querySelectorAll('#navigation ul > li > a');

classesLink.addEventListener('click', function(e) {
    e.preventDefault();
    submenu.classList.toggle('show');
});
navLinks.forEach(link => {
    if (link !== classesLink) {
        link.addEventListener('click', function() {
            submenu.classList.remove('show');
        });
    }
});
document.addEventListener('click', function(e) {
    if (
        !submenu.contains(e.target) &&
        e.target !== classesLink &&
        submenu.classList.contains('show')
    ) {
        submenu.classList.remove('show');
    }
});
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    this.querySelector('.card-inner').classList.toggle('flipped');
  });
});