//Animação

document.querySelectorAll('nav a').forEach(link => {
    link.onclick = function() {
        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    };
});
