$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 8,
    },
  },
});

function assistirAgora() {
  window.open("https://www.youtube.com/watch?v=lU0iod5zHbY");
}

function netflixAgora() {
  window.open("https://www.netflix.com/browse");
}

function alerta() {
  alert("Selecione um perfil para entrar!");
}
