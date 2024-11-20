const items = document.querySelectorAll('.item');

items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.style.width = '35%'
    })

    item.addEventListener('mouseleave', () => {
        item.style.width = ''
    })
})


document.getElementById('negociar').addEventListener('click', () => {
    const url = ''
    window.location.href = url
})
document.getElementById('comprar').addEventListener('click', () => {
    const url = 'Paginas/paginaDeCompras/pagina_de_compras.html'
    window.location.href = url
})
document.getElementById('vender').addEventListener('click', () => {
    const url = ''
    window.location.href = url
})
document.getElementById('perfil').addEventListener('click', () => {
    const url = 'Paginas/login/WEBWALL_LOGIN/webWallLogin.html'
    window.location.href = url
})