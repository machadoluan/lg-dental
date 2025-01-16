$(document).ready(function () {

  // Btn Idiomas
  $(".btn-idioma").on('click', function (event) {
    event.stopPropagation();
    if ($(".dropdown-idioma").css("display") === 'none') {
      $(".dropdown-idioma").fadeIn()
    } else {
      $(".dropdown-idioma").fadeOut()
    }

  })

  // Menu mobile

  $("#icon-menu").on('click', function () {
    $(".mobile-nav").fadeIn().css('display', 'flex');
    $(this).css("display", "none")
    $("#close-menu").fadeIn()
  })
  $("#close-menu").on('click', function () {
    $(".mobile-nav").fadeOut()
    $(this).css("display", "none")
    $("#icon-menu").fadeIn()
  })

  $(".link-page").on("click", function(){
    $(".mobile-nav").fadeOut()
    $("#icon-menu").fadeIn()
    $("#close-menu").css("display","none")

  })

  // Lista de imagens adicionais
  const morePhotos = [
    { antes: './assets/Dentes/img8.jpg', depois: './assets/Dentes/img9.jpg', alt: 'Imagem 22' }
  ];

  // Variáveis de controle
  let loadedPhotos = 0; // Quantidade de fotos carregadas
  const photosPerClick = 4; // Quantidade de fotos para carregar por clique

  // Evento de clique no botão
  $('#load-more').on('click', function () {
    // Carrega o próximo lote de imagens
    const nextPhotos = morePhotos.slice(
      loadedPhotos,
      loadedPhotos + photosPerClick
    );

    // Adiciona as imagens ao container
    nextPhotos.forEach(photo => {
      const card = `
        <div class="card">
          <div class="slider-container">
            <div class="slider">
              <img src="${photo.antes}" alt="Antes" class="before-image">
              <img src="${photo.depois}" alt="Depois" class="after-image">
              <div class="divider"></div>
              <input type="range" min="0" max="100" value="50" class="slider-control">
            </div>
          </div>
        </div>
      `;
      $('.fotos-container').append(card);
    });

    // Atualiza o contador de fotos carregadas
    loadedPhotos += photosPerClick;

    // Oculta o botão se todas as imagens foram carregadas
    if (loadedPhotos >= morePhotos.length) {
      $(this).hide(); // Esconde o botão "carregar mais"
      $("#see-less").show(); // Mostra o botão "ver menos"
    }

    addSliderEvents()
  });


  function addSliderEvents() {
    document.querySelectorAll('.slider-control').forEach(slider => {
      const afterImage = slider.parentElement.querySelector('.after-image');
      const divider = slider.parentElement.querySelector('.divider');

      slider.addEventListener('input', (e) => {
        const value = e.target.value;
        afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        divider.style.left = `${value}%`;
      });
    });
  }

  addSliderEvents()
});



$(document).on('click', function (event) {
  // Verifica se o clique foi fora do dropdown e do botão
  if (!$(event.target).closest('.btn-idioma, .dropdown-idioma').length) {
    $(".dropdown-idioma").fadeOut();
  }
});