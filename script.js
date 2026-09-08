// 簡單互動：平滑滾動 + 打開 pdf.html
document.addEventListener('click', function(e){
  if(e.target.matches('a[href^="#"]')){
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  }
  if(e.target.id === 'pdfBtn'){
    window.open('pdf.html', '_blank');
  }
});
