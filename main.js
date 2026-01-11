const slides = document.querySelectorAll('.carousel img');
  const toggleBtn = document.getElementById('toggleCarousel');
  const nextBtn = document.getElementById('nextSlide');
  const prevBtn = document.getElementById('prevSlide');

  let index = 0;
  let playing = true;

  function showSlide(i) {
    slides[index].classList.remove('active');
    index = (i + slides.length) % slides.length;
    slides[index].classList.add('active');
  }

  function showNext() {
    showSlide(index + 1);
  }

  function showPrev() {
    showSlide(index - 1);
  }

  let interval = setInterval(showNext, 4000);

  toggleBtn.addEventListener('click', () => {
    if (playing) {
      clearInterval(interval);
      toggleBtn.textContent = '▶';
    } else {
      interval = setInterval(showNext, 4000);
      toggleBtn.textContent = '⏸';
    }
    playing = !playing;
  });

  nextBtn.addEventListener('click', () => {
    showNext();
  });

  prevBtn.addEventListener('click', () => {
    showPrev();
  });

  function enviarPedidoWhatsApp() {
    const nome = document.getElementById('nomePedido').value;
    const endereco = document.getElementById('enderecoPedido').value;
    const produto = document.getElementById('produtoPedido').value;
    const obs = document.getElementById('obsPedido').value;

    const mensagem = `Olá, gostaria de pedir gás.%0A%0ANome: ${nome}%0AEndereço: ${endereco}%0AProduto: ${produto}%0AObservações: ${obs}`;
    window.open(`https://wa.me/5585997000089?text=${mensagem}`, '_blank');
  }