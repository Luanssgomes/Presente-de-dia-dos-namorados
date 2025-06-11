document.querySelector('.bg').addEventListener('click', function() {
    document.getElementById('player').play();
});

 const slides = document.querySelector('.slides');
    const imagens = document.querySelectorAll('.slides img');
    let index = 0;

    function passarSlide() {
      index = (index + 1) % imagens.length;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(passarSlide, 3000);