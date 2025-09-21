(function(){
  const hero  = document.querySelector('.hero');
  const video = document.getElementById('bgVideo');

  function startReveal(){
    setTimeout(()=>{ hero.classList.add('on') }, 3000); // تأخير ظهور العناصر بعد الفيديو
    setTimeout(()=>{ 
      const elements = document.querySelectorAll('.ani');
      elements.forEach((el, index) => {
        el.classList.add('in');
        el.style.setProperty('--delay', (index * 0.2) + 's');
      });
    }, 3300); // الانتظار لثلاث ثوانٍ
  }

  if (video){
    if (video.readyState >= 2) startReveal();
    else video.addEventListener('loadeddata', startReveal);
    setTimeout(()=>{ hero.classList.add('on') }, 3500); // فالباك
  }
})();
