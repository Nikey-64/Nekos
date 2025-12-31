// Interactividad mínima: modal de descarga
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modalText');
  const modalLink = document.getElementById('modalLink');
  const modalClose = document.getElementById('modalClose');
  const downloadBtns = document.querySelectorAll('.download-arch');
  const downloadBtnHero = document.getElementById('downloadBtn');

  function openModal(arch){
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden','false');
    modalText.textContent = `Preparando instalador para ${arch}...`;
    // En un sitio real este enlace sería la URL real del binario
    modalLink.href = `https://example.com/Nekos-installer-${arch}.iso`;
    modalLink.textContent = `Descargar Nekos (${arch})`;
  }

  function closeModal(){
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden','true');
  }

  downloadBtns.forEach(b => {
    b.addEventListener('click', () => openModal(b.dataset.arch));
  });

  downloadBtnHero && downloadBtnHero.addEventListener('click', () => openModal('x64'));
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });

  // Top header download button behavior: show after scrolling and hide when footer is visible
  const header = document.querySelector('.site-header');
  const topDownload = document.getElementById('downloadTopBtn');
  const footer = document.querySelector('.site-footer');

  // hook the same openModal behavior
  if(topDownload){
    topDownload.addEventListener('click', (e) => { e.preventDefault(); openModal('x64'); });
  }

  // toggle header scrolled state and top button visibility on scroll
  function onScroll(){
    if(window.scrollY > 180){
      header && header.classList.add('scrolled');
      topDownload && topDownload.classList.remove('hidden');
    } else {
      header && header.classList.remove('scrolled');
      topDownload && topDownload.classList.add('hidden');
    }
  }

  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // hide the top download button when footer is intersecting (reached)
  if(footer && topDownload){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          topDownload.classList.add('hidden');
        } else {
          // only show when scrolled past hero
          if(window.scrollY > 180) topDownload.classList.remove('hidden');
        }
      });
    },{threshold:0.1});
    io.observe(footer);
  }
});
