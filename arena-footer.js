(() => {
  if (document.body.dataset.page !== 'game') return;
  const params = new URLSearchParams(location.search);
  if (params.get('game') !== 'arena-breakout-infinite') return;
  const install = () => {
    const banner = document.querySelector('.arena-footer-ad');
    if (!banner) return;
    banner.classList.add('arena-footer-970x90');
    const link = banner.querySelector('.arena-footer-link');
    const image = banner.querySelector('img');
    if (!link || !image) return;
    link.href = 'article.html?slug=arena-breakout-infinite-pc-guide';
    link.setAttribute('aria-label', 'Explore Arena Breakout: Infinite');
    image.src = 'affiliate-assets/arena-breakout-970x90.gif';
    image.width = 970;
    image.height = 90;
    image.alt = 'Arena Breakout: Infinite tactical extraction shooter promotional artwork';
    if (!document.getElementById('arena-footer-970x90-styles')) {
      const style = document.createElement('style');
      style.id = 'arena-footer-970x90-styles';
      style.textContent = '.arena-footer-970x90{width:min(970px,100%)!important;height:90px!important;aspect-ratio:auto!important}.arena-footer-970x90 .arena-footer-link,.arena-footer-970x90 .arena-footer-visual,.arena-footer-970x90 .arena-footer-visual img{height:90px!important}.arena-footer-970x90 .arena-footer-visual img{object-fit:cover!important}';
      document.head.appendChild(style);
    }
  };
  install();
  new MutationObserver(install).observe(document.body, {childList:true, subtree:true});
})();
