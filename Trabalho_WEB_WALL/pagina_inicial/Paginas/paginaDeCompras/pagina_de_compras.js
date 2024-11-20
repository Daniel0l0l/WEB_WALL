let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Volta para a última imagem
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Volta para a primeira imagem
    }

    slides[currentSlide].classList.add('active');
}

// Inicializa a primeira imagem como ativa
document.addEventListener('DOMContentLoaded', () => {
    slides[currentSlide].classList.add('active');
});





// rolagem da pagina
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < lastScrollTop) {
        // Rolando para cima
        header.classList.remove('show');
    } else {
        // Rolando para baixo
        header.classList.add('show');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para não permitir valores negativos
});



const itens = document.querySelectorAll('.itens')
itens.forEach((item) => {
    item.addEventListener('click', () => {
        let url = '/pagina_inicial/Paginas/Compras/WebwallCompra/webwallCompra.html'
        window.location.href = url
    })
})

const logo = document.getElementById('logo')
logo.addEventListener('click', () => {
    let url = '/pagina_inicial/pagina_inicial.html'
    window.location.href = url
})

const perfil = document.getElementById('perfil')
perfil.addEventListener('click', () => {
    let url = '/pagina_inicial/Paginas/login/WEBWALL_LOGIN/webWallLogin.html'
    window.location.href = url
})